package org.caterly.cateringclientservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private String apartmentNumber;
    private String city;
    private String houseNumber;
    private String paymentMethod;
    private String state;
    private String street;
    private String zip;
    private Double amount;
}
