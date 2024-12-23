package org.caterly.cateringclientservice.order.api;


import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.order.api.application.OrderService;
import org.caterly.cateringclientservice.order.api.dto.OrderPlaceRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderRequestDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.api.dto.OrderReviewDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client/orders")
@RequiredArgsConstructor
public final class OrderController {

    private final OrderService orderService;

    /**
     * Retrieves a list of all available orders.
     *
     * @return ResponseEntity containing the list of OrderDTO objects
     */
    @GetMapping()
    public ResponseEntity<List<OrderResponseDTO>> getAllClientOrders() {
        return ResponseEntity.ok(orderService.getAllClientOrders());
    }

    @PostMapping()
    public ResponseEntity<OrderResponseDTO> addOrder(
            final @RequestBody OrderRequestDTO orderRequest
    ) {
        OrderResponseDTO order = orderService.addOrder(orderRequest);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/details/{orderId}")
    public ResponseEntity<OrderResponseDTO> getOrderDetails(
            final @PathVariable long orderId
    ) {
        OrderResponseDTO orderDetails = orderService.getOrderDetails(orderId);
        return ResponseEntity.ok(orderDetails);
    }

    @PutMapping("/{orderId}/place")
    public ResponseEntity<OrderResponseDTO> placeOrder(
            final @PathVariable Long orderId,
            final @RequestBody OrderPlaceRequestDTO orderPutRequest
    ) {
        OrderResponseDTO order = orderService.placeOrder(
                orderId, orderPutRequest
        );
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}/deliver")
    public ResponseEntity<OrderResponseDTO> deliverOrder(
            final @PathVariable Long orderId,
            final Authentication auth
    ) {
        String clientMail = auth.getName();
        OrderResponseDTO order = orderService.deliverOrder(
                orderId,
                clientMail
        );
        return ResponseEntity.ok(order);
    }

    @PostMapping("/{orderId}/review")
    public ResponseEntity<OrderResponseDTO> reviewOrder(
            final @PathVariable Long orderId,
            final Authentication auth,
            final @RequestBody OrderReviewDTO orderReviewDTO
            ) {
        String clientMail = auth.getName();
        OrderResponseDTO order = orderService.reviewOrder(
                orderId,
                clientMail,
                orderReviewDTO
        );
        return ResponseEntity.ok(order);
    }
}
