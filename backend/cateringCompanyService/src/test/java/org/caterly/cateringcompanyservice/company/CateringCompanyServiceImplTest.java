package org.caterly.cateringcompanyservice.company.domain;

import org.caterly.cateringcompanyservice.company.api.dto.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.company.mapper.CompanyMapper;
import org.caterly.cateringcompanyservice.company.application.CateringCompanyService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

class CateringCompanyServiceImplTest {

    private static final long COMPANY_1_ID = 1L;
    private static final long COMPANY_2_ID = 2L;

    @Mock
    private CateringCompanyRepository cateringCompanyRepository;

    @Mock
    private CompanyMapper companyMapper;

    @InjectMocks
    private CateringCompanyServiceImpl cateringCompanyService;

    private CateringCompanyEntity company1;
    private CateringCompanyEntity company2;
    private CateringCompanyDTO companyDTO1;
    private CateringCompanyDTO companyDTO2;

    @BeforeEach
    void setUp() {
        openMocks(this);

        company1 = new CateringCompanyEntity(
                COMPANY_1_ID, "San Francisco", List.of());
        company2 = new CateringCompanyEntity(
                COMPANY_2_ID, "New York", List.of());

        companyDTO1 = new CateringCompanyDTO();
        companyDTO1.setId(COMPANY_1_ID);
        companyDTO1.setCity("San Francisco");

        companyDTO2 = new CateringCompanyDTO();
        companyDTO2.setId(COMPANY_2_ID);
        companyDTO2.setCity("New York");
    }

    @Test
    void testGetAllCompanies() {
        // Given
        when(cateringCompanyRepository.findAll()).thenReturn(List.of(company1, company2));
        when(companyMapper.toCateringCompanyDTO(company1)).thenReturn(companyDTO1);
        when(companyMapper.toCateringCompanyDTO(company2)).thenReturn(companyDTO2);

        // When
        List<CateringCompanyDTO> result = cateringCompanyService.getAllCompanies();

        // Then
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("San Francisco", result.get(0).getCity());
        assertEquals("New York", result.get(1).getCity());

        // Verify interactions
        verify(cateringCompanyRepository).findAll();
        verify(companyMapper).toCateringCompanyDTO(company1);
        verify(companyMapper).toCateringCompanyDTO(company2);
    }

    @Test
    void testCreateCompany() {
        // Given
        when(companyMapper.toCateringCompanyEntity(companyDTO1)).thenReturn(company1);
        when(cateringCompanyRepository.save(company1)).thenReturn(company1);
        when(companyMapper.toCateringCompanyDTO(company1)).thenReturn(companyDTO1);

        // When
        CateringCompanyDTO result = cateringCompanyService.createCompany(companyDTO1);

        // Then
        assertNotNull(result);
        assertEquals("San Francisco", result.getCity());

        // Verify interactions
        verify(companyMapper).toCateringCompanyEntity(companyDTO1);
        verify(cateringCompanyRepository).save(company1);
        verify(companyMapper).toCateringCompanyDTO(company1);
    }

    @Test
    void testGetAllCompaniesReturnsEmptyList() {
        // Given
        when(cateringCompanyRepository.findAll()).thenReturn(List.of());

        // When
        List<CateringCompanyDTO> result = cateringCompanyService.getAllCompanies();

        // Then
        assertNotNull(result);
        assertTrue(result.isEmpty());

        // Verify interactions
        verify(cateringCompanyRepository).findAll();
    }
}