package org.caterly.cateringcompanyservice.company.application;

import org.caterly.cateringcompanyservice.company.api.dto.CateringCompanyDTO;

import java.util.List;

public interface CateringCompanyService {
    List<CateringCompanyDTO> getAllCompanies();

    CateringCompanyDTO createCompany(CateringCompanyDTO companyDTO);
}