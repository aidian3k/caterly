package org.caterly.cateringcompanyservice.order.api.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class OrderDetailsDto {
    private Long id;
    private Long clientId;
    private LocalDate dateOfPurchase;
    private String address;
    private String state;
    private String paymentMethod;
    private List<OrderMealDTO> meals;

    public List<OrderMealDTO> getMeals() {
        return meals == null ? List.of() : List.copyOf(meals);
    }
}
