package org.caterly.cateringcompanyservice.order.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.order.api.dto.OrderDetailsDto;
import org.caterly.cateringcompanyservice.order.application.CateringOrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/company/api/orders")
@RequiredArgsConstructor
public class CateringOrderController {
    private final CateringOrderService cateringOrderService;
    @GetMapping("/{companyId}")
    public ResponseEntity<List<OrderDetailsDto>> getAllOrders(
            @PathVariable final long companyId) {
        return ResponseEntity.ok(cateringOrderService.getAllOrders(companyId));
    }
}
