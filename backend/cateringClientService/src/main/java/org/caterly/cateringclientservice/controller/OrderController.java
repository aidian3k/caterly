package org.caterly.cateringclientservice.controller;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.dto.OrderRequest;
import org.caterly.cateringclientservice.model.Order;
import org.caterly.cateringclientservice.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/client/order")
@RequiredArgsConstructor
public final class OrderController {

    private final OrderService orderService;

    @PostMapping("/orders/{orderId}")
    public ResponseEntity<String> placeOrder(
            final @PathVariable String orderId,
            final @RequestBody OrderRequest orderRequest
    ) {
        Order order = orderService.createOrder(orderRequest);
        return ResponseEntity.ok("Order placed successfully " + order);
    }
}
