package org.caterly.cateringclientservice.order.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.application.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/client/orders")
@RequiredArgsConstructor
public final class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponseDTO> placeOrder(
        final @RequestBody OrderPostRequestDTO orderPostRequest
    ) {
        OrderResponseDTO order = orderService.addOrder(orderPostRequest);
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<OrderResponseDTO> placeOrder(
            final Long orderId,
            final @RequestBody OrderPutRequestDTO orderPutRequest
    ) {
        OrderResponseDTO order = orderService.modifyOrder(orderId, orderPutRequest);
        return ResponseEntity.ok(order);
    }
}
