package org.caterly.cateringcompanyservice.company.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.company.api.dto.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.company.application.CateringCompanyService;
import org.caterly.cateringcompanyservice.company.mapper.CompanyMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public final class CateringCompanyServiceImpl implements CateringCompanyService {

    private final CateringCompanyRepository cateringCompanyRepository;
    private final CompanyMapper companyMapper;

    @Override
    public List<CateringCompanyDTO> getAllCompanies() {
        return cateringCompanyRepository.findAll()
                .stream()
                .map(companyMapper::toCateringCompanyDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CateringCompanyDTO createCompany(CateringCompanyDTO companyDTO) {
        CateringCompanyEntity companyEntity = companyMapper.toCateringCompanyEntity(companyDTO);
        CateringCompanyEntity savedEntity = cateringCompanyRepository.save(companyEntity);
        return companyMapper.toCateringCompanyDTO(savedEntity);
    }
}