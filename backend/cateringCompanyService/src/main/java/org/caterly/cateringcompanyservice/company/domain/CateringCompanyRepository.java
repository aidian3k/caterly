package org.caterly.cateringcompanyservice.company.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface CateringCompanyRepository
        extends JpaRepository<CateringCompanyEntity, Long> {

    @Query(value = "SELECT * FROM catering_company_entity WHERE city = :city", nativeQuery = true)
    List<CateringCompanyEntity> findAllByCity(String city);

    @Query(value = "SELECT * FROM catering_company_entity", nativeQuery = true)
    List<CateringCompanyEntity> findAllCompanies();
}