package org.caterly.cateringcompanyservice.order.application;

import org.caterly.cateringcompanyservice.order.api.dto.OrderDetailsDto;

import java.util.List;

public interface CateringOrderService {
    List<OrderDetailsDto> getAllOrders(final long companyId);
}
