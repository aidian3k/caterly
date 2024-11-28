package org.caterly.cateringclientservice.meals.application;

import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;

import java.util.List;

public interface MealService {
    List<MealDTO> getAllMeals();
}
