package org.caterly.cateringclientservice.meals.mapper;

import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.caterly.cateringclientservice.meals.domain.MealEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MealMapper {
    MealDTO toDto(MealEntity meal);
}