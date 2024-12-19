package org.caterly.cateringclientservice.order.application;

import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.entity.Order;
import org.caterly.cateringclientservice.order.entity.OrderMeal;
import org.caterly.cateringclientservice.order.mapper.OrderMapper;
import org.caterly.cateringclientservice.order.repository.OrderMealRepository;
import org.caterly.cateringclientservice.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.repository.ClientRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderMapper orderMapper;

    private final OrderRepository orderRepository;
    private final OrderMealRepository orderMealRepository;
    private final ClientRepository clientRepository;

    @Override
    @Transactional(readOnly = true)
    public OrderResponseDTO addOrder(
            final OrderPostRequestDTO orderPostRequest
    ) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Client user = clientRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Order order = orderMapper.toOrderEntity(orderPostRequest);
        order.setClient(user);
        Order orderSaved = orderRepository.save(order);

        List<OrderMeal> meals = orderPostRequest.getMeals().stream()
                .map(meal -> orderMapper.toOrderMealEntity(orderSaved, meal))
                .toList();
        orderMealRepository.saveAll(meals);

        return orderMapper.toOrderResponseDTO(orderSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public OrderResponseDTO modifyOrder(
            Long orderId,
            final OrderPutRequestDTO orderPutRequest
    ) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Client user = clientRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order with given ID not found"));

        if (!order.getClient().getId().equals(user.getId())) {
            try {
                throw new IllegalAccessException("You are not authorized to modify this order");
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }

        order.setStatus(orderPutRequest.getStatus());
        order.setAddress(orderPutRequest.getAddress());
        order.setDateOfPurchase(orderPutRequest.getDateOfPurchase());
        order = orderRepository.save(order);

        return orderMapper.toOrderResponseDTO(order);
    }
}
