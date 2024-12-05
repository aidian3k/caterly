package org.caterly.cateringclientservice.meals.api.DTO;

import lombok.Data;

@Data
public class CateringOfferDTO {
    private Long id;
    private Double price;
    private String typeOfFood;
    private String picture;
}
