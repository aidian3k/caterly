package org.caterly.cateringclientservice.meals.api.DTO;

import lombok.Data;

@Data
public class MealDTO {
    private Long id;
    private String typeOfFood;
    private String price;
    private CateringCompanyDTO cateringEntity;
}