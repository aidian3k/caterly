package org.caterly.cateringclientservice.order.application;


import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;

import java.util.List;

public interface OrderService {
    List<OrderResponseDTO> getAllClientOrders();
    OrderResponseDTO addOrder(OrderPostRequestDTO orderPostRequest);
    OrderResponseDTO modifyOrder(
            Long orderId,
            OrderPutRequestDTO orderPutRequest
    );
}
