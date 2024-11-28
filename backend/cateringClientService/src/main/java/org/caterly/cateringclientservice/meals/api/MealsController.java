package org.caterly.cateringclientservice.meals.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.caterly.cateringclientservice.meals.application.MealService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client/meals")
@RequiredArgsConstructor
public class MealsController {

    private final MealService mealService;

    @GetMapping
    public ResponseEntity<List<MealDTO>> getMeals() {
        return ResponseEntity.ok(mealService.getAllMeals());
    }
}