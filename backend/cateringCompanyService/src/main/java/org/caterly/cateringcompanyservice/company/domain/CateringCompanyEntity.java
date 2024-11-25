package org.caterly.cateringcompanyservice.company.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.caterly.cateringcompanyservice.offer.domain.CateringFoodEntity;

import java.util.List;

@Entity
@Table(name = "catering_company_entity")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public final class CateringCompanyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    @OneToMany(mappedBy = "company")
    private List<CateringFoodEntity> foodEntities;

    public List<CateringFoodEntity> getFoodEntities() {
        return foodEntities == null ? List.of() : List.copyOf(foodEntities);
    }
}
