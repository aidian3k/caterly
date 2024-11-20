package org.caterly.cateringcompanyservice.offer.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

interface CateringOfferRepository
    extends JpaRepository<CateringFoodEntity, Long> {
    @Query(value = "SELECT * FROM catering_food_entity "
            + "WHERE catering_company_id = :companyId", nativeQuery = true)
    List<CateringFoodEntity> findAllByCompanyId(Long companyId);
}
