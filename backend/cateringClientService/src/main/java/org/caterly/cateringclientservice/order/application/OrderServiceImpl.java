package org.caterly.cateringclientservice.order.application;

import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.entity.Order;
import org.caterly.cateringclientservice.order.entity.OrderMeal;
import org.caterly.cateringclientservice.order.mapper.OrderMapper;
import org.caterly.cateringclientservice.order.repository.OrderMealRepository;
import org.caterly.cateringclientservice.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderMapper orderMapper;

    private final OrderRepository orderRepository;
    private final OrderMealRepository orderMealRepository;

    @Override
    @Transactional(readOnly = true)
    public OrderResponseDTO addOrder(
            final OrderPostRequestDTO orderPostRequest
    ) {
        Order order = orderMapper.toOrderEntity(orderPostRequest);
        Order orderSaved = orderRepository.save(order);

        List<OrderMeal> meals = orderPostRequest.getMeals().stream().map(
                x -> orderMapper.toOrderMealEntity(orderSaved, x)
        ).toList();
        orderMealRepository.saveAll(meals);

        return orderMapper.toOrderResponseDTO(orderSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public OrderResponseDTO modifyOrder(
            Long orderId,
            final OrderPutRequestDTO orderPutRequest
    ) {
        Order order = orderRepository.getById(orderId);
        if (order == null) {
            throw new IllegalArgumentException(
                    "Order with given ID not found"
            );
        }
        order.setStatus(orderPutRequest.getStatus());
        order.setAddress(orderPutRequest.getAddress());
        order.setDateOfPurchase(orderPutRequest.getDateOfPurchase());
        order = orderRepository.save(order);
        return orderMapper.toOrderResponseDTO(order);
    }
}
