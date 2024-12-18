package org.caterly.cateringclientservice.order.api.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class OrderDTO {
    private Long id;
    private String name;
    private LocalDate dateOfPurchase;
    private String orderState;
}
