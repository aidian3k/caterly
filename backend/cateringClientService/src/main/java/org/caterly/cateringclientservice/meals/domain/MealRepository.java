package org.caterly.cateringclientservice.meals.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<MealEntity, Long> {
}