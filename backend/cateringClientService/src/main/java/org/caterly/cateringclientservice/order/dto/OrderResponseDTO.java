package org.caterly.cateringclientservice.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
    private Long id;
    private Long clientId;
    private Date dateOfPurchase;
    private String address;
    private String status;
    private List<OrderMealDTO> meals;

    public final Date getDateOfPurchase() {
        return (Date) dateOfPurchase.clone();
    }

    public final void setDateOfPurchase(final Date dateOfPurchase) {
        this.dateOfPurchase = new Date(dateOfPurchase.getTime());
    }

    public final List<OrderMealDTO> getMeals() {
        return List.copyOf(meals);
    }
}
