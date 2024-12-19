package org.caterly.cateringcompanyservice.order.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.order.api.dto.OrderDetailsDto;
import org.caterly.cateringcompanyservice.order.application.CateringOrderService;
import org.caterly.cateringcompanyservice.order.domain.client.Order;
import org.caterly.cateringcompanyservice.order.domain.client.OrderMealRepository;
import org.caterly.cateringcompanyservice.order.domain.client.OrderRepository;
import org.caterly.cateringcompanyservice.order.mapper.OrderMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CateringOrderServiceImpl implements CateringOrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    @Override
    public List<OrderDetailsDto> getAllOrders(final long companyId) {
        List<Order> orders = orderRepository.findAll();

        return orderMapper.getOrderResponseDto(orders);
    }
}
