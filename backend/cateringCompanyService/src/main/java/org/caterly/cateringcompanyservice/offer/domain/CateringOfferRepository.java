package org.caterly.cateringcompanyservice.offer.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
interface CateringOfferRepository
    extends JpaRepository<CateringFoodEntity, Long> {
    @Query("select c from CateringFoodEntity c where c.company.id = :companyId")
    List<CateringFoodEntity> findAllByCompanyId(Long companyId);

    void deleteByCompanyIdAndId(Long companyId, Long foodId);

    CateringFoodEntity findByCompanyIdAndId(Long companyId, Long foodId);
}
