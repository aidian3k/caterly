package org.caterly.cateringcompanyservice.company.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.company.api.DTO.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.company.application.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company/api")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    /**
     * Retrieves a CateringCompany by its ID.
     *
     * @param id the ID of the catering company
     * @return ResponseEntity containing the CateringCompanyDTO
     */
    @GetMapping("/companies/{id}")
    public ResponseEntity<CateringCompanyDTO> getCateringCompanyById(
            @PathVariable final Long id) {
        return ResponseEntity.ok(companyService.getCateringCompanyById(id));
    }
}
