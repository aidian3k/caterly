package org.caterly.cateringcompanyservice.offer.domain;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;

@Entity
@Table(name = "catering_food_entity")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public final class CateringFoodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double price;

    private String typeOfFood;

    private byte[] picture;

    @ManyToOne
    @JoinColumn(name = "catering_company_id", nullable = false)
    private CateringCompanyEntity company;

    public CateringCompanyEntity getCompany() {
        if (company == null) {
            return null;
        }
        return new CateringCompanyEntity(
            company.getId(),
            company.getCity(),
            company.getFoodEntities()
        );
    }
}
