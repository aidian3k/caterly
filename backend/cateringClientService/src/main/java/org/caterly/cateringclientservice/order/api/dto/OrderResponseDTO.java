package org.caterly.cateringclientservice.order.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
    private Long id;
    private Long clientId;
    private LocalDate dateOfPurchase;
    private String address;
    private String state;
    private String paymentMethod;
    private String review;
    private Integer rating;
    private List<OrderMealDTO> meals;
}
