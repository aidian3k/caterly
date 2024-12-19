package org.caterly.cateringclientservice.order.api.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.order.api.dto.OrderPlaceRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.service.ClientService;
import org.caterly.cateringclientservice.order.api.application.OrderService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderMapper orderMapper;

    private final OrderRepository orderRepository;
    private final OrderMealRepository orderMealRepository;
    private final ClientService clientService;

    /**
     * Retrieves all client orders, maps them to DTOs,C
     * and enriches them with catering company data.
     *
     * @return a list of MealDTO objects containing meal details
     */
    @Override
    public List<OrderResponseDTO> getAllClientOrders() {

        Client currentUser = clientService.getClientByEmail(
                Optional
                        .ofNullable(
                                SecurityContextHolder
                                        .getContext()
                                        .getAuthentication()
                                        .getName()
                        )
                        .orElseThrow(() ->
                                new UsernameNotFoundException(
                                        "Principal name could not be extracted"
                                )
                        )
        );

        return orderRepository.findAllByClientId(currentUser.getId()).stream()
                .map(orderMapper::toOrderResponseDTO)
                .toList();
    }

    @Override
    @Transactional
    public OrderResponseDTO addOrder(
            final OrderRequestDTO orderRequest
    ) {
        Client currentUser = clientService.getClientByEmail(
                Optional
                        .ofNullable(
                                SecurityContextHolder
                                        .getContext()
                                        .getAuthentication()
                                        .getName()
                        )
                        .orElseThrow(() ->
                                new UsernameNotFoundException(
                                        "Principal name could not be extracted"
                                )
                        )
        );

        Order order = new Order();
        order.setClient(currentUser);
        order.setState(OrderState.DRAFT);
        order.setDateOfPurchase(LocalDateTime.now().toLocalDate());
        Order orderSaved = orderRepository.save(order);

        List<OrderMeal> meals = orderRequest.getMeals().stream()
                .map(
                        meal -> orderMapper.toOrderMealEntity(orderSaved, meal)
                )
                .toList();
        orderMealRepository.saveAll(meals);

        return orderMapper.toOrderResponseDTO(orderSaved);
    }

    @Override
    @Transactional
    public OrderResponseDTO placeOrder(
            final Long orderId,
            final OrderPlaceRequestDTO orderPlaceRequest
    ) {
        Client currentUser = clientService.getClientByEmail(
                Optional
                        .ofNullable(
                                SecurityContextHolder
                                        .getContext()
                                        .getAuthentication()
                                        .getName()
                        )
                        .orElseThrow(() ->
                                new UsernameNotFoundException(
                                        "Principal name could not be extracted"
                                )
                        )
        );

        Order order = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new IllegalArgumentException("Order with given"
                                + " ID not found")
                );

        if (!order.getClient().getId().equals(currentUser.getId())) {
            try {
                throw new IllegalAccessException("You are not authorized "
                        + "to modify this order");
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }

        order.setState(OrderState.PAID);
        order.setAddress(orderPlaceRequest.getAddress());
        order.setPaymentMethod(orderPlaceRequest.getPaymentMethod());

        Order orderSaved = orderRepository.save(order);
        return orderMapper.toOrderResponseDTO(orderSaved);
    }
}
