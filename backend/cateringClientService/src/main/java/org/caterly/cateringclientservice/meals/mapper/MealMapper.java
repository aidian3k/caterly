package org.caterly.cateringclientservice.meals.mapper;

import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.caterly.cateringclientservice.meals.domain.MealEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MealMapper {
    @Mapping(target = "cateringEntity", ignore = true)
    MealDTO toDto(MealEntity meal);
}
