package org.caterly.cateringclientservice.order.api.application;

import org.caterly.cateringclientservice.order.api.dto.OrderPlaceRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderReviewDTO;

import java.util.List;

public interface OrderService {
    List<OrderResponseDTO> getAllClientOrders();

    OrderResponseDTO addOrder(OrderRequestDTO orderRequest);

    OrderResponseDTO placeOrder(
            Long orderId,
            OrderPlaceRequestDTO orderPlaceRequest
    );

    OrderResponseDTO deliverOrder(Long orderId, String clientMail);

    OrderResponseDTO reviewOrder(Long orderId,
                                 String clientMail,
                                 OrderReviewDTO orderReviewDTO);
    OrderResponseDTO getOrderDetails(long orderId);
}

