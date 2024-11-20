package org.caterly.cateringcompanyservice.offer.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
