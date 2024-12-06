package org.caterly.cateringcompanyservice.company.application;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.company.api.DTO.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;
import org.caterly.cateringcompanyservice.company.domain.CateringCompanyRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CateringCompanyRepository repository;

    /**
     * Retrieves a CateringCompany by its ID.
     *
     * @param id the ID of the catering company
     * @return a CateringCompanyDTO containing the company details
     * @throws RuntimeException if the company is not found
     */
    public CateringCompanyDTO getCateringCompanyById(final Long id) {
        CateringCompanyEntity entity = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Company not found by Id"
                ));
        CateringCompanyDTO dto = new CateringCompanyDTO();
        dto.setId(entity.getId());
        dto.setCity(entity.getCity());
        return dto;
    }
}
