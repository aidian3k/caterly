package org.caterly.cateringclientservice.order.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderPlaceRequestDTO {
    private String address;
    private String paymentMethod;
}
