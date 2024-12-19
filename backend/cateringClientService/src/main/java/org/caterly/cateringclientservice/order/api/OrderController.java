package org.caterly.cateringclientservice.order.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.application.OrderService;
import org.springframework.http.ResponseEntity;
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

    @GetMapping()
    public ResponseEntity<List<OrderResponseDTO>> getAllClientOrders() {
        return ResponseEntity.ok(orderService.getAllClientOrders());
    }

    @PostMapping()
    public ResponseEntity<OrderResponseDTO> placeOrder(
        final @RequestBody OrderPostRequestDTO orderPostRequest
    ) {
        OrderResponseDTO order = orderService.addOrder(orderPostRequest);
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<OrderResponseDTO> placeOrder(
            final @PathVariable Long orderId,
            final @RequestBody OrderPutRequestDTO orderPutRequest
    ) {
        OrderResponseDTO order = orderService.modifyOrder(
                orderId, orderPutRequest
        );
        return ResponseEntity.ok(order);
    }
}
