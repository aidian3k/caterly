package org.caterly.cateringclientservice.order.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.order.api.application.OrderService;
import org.caterly.cateringclientservice.order.api.dto.OrderDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderPutRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.application.OrderService;


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
    public ResponseEntity<List<OrderDTO>> getAllClientOrders() {
        return ResponseEntity.ok(orderService.getAllClientOrders());
        
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
