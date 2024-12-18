package org.caterly.cateringclientservice.order.api.application;

import org.caterly.cateringclientservice.order.api.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    List<OrderDTO> getAllClientOrders();
}

