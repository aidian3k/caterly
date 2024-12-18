package org.caterly.cateringclientservice.order.application;


import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;

public interface OrderService {
    OrderResponseDTO addOrder(OrderPostRequestDTO orderPostRequest);
    OrderResponseDTO modifyOrder(Long orderId, OrderPutRequestDTO orderPutRequest);
}
