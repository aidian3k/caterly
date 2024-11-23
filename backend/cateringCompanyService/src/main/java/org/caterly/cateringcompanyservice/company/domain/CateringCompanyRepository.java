package org.caterly.cateringcompanyservice.company.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CateringCompanyRepository
        extends JpaRepository<CateringCompanyEntity, Long> {
}
