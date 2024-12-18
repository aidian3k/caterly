package org.caterly.cateringclientservice.order.api.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.order.api.application.OrderService;
import org.caterly.cateringclientservice.order.api.dto.OrderDTO;
import org.caterly.cateringclientservice.service.ClientService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ClientService clientService;

    /**
     * Retrieves all client orders, maps them to DTOs,C
     * and enriches them with catering company data.
     *
     * @return a list of MealDTO objects containing meal details
     */
    @Override
    public List<OrderDTO> getAllClientOrders() {

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
                .map(this::mapToOrderDTO)
                .toList();
    }

    private OrderDTO mapToOrderDTO(final OrderEntity orderEntity) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(orderEntity.getId());
        orderDTO.setName(
                orderEntity.getId()
                        + "-"
                        + orderEntity.getClient().getId()
                        + "-"
                        + orderEntity.getDateOfPurchase()
        );
        orderDTO.setDateOfPurchase(orderEntity.getDateOfPurchase());
        orderDTO.setOrderState(orderEntity.getOrderState().name());
        return orderDTO;
    }
}
