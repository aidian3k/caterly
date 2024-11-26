package org.caterly.cateringcompanyservice.company.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CateringCompanyRepository
        extends JpaRepository<CateringCompanyEntity, Long> {
}
