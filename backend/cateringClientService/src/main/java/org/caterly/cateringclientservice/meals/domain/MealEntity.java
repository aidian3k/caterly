package org.caterly.cateringclientservice.meals.domain;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "meal_entity")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class MealEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeOfFood;
    private String price;

    private Long cateringCompanyId;
}