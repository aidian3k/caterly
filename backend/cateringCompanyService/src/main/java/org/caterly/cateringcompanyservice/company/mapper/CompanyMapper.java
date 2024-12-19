package org.caterly.cateringcompanyservice.company.mapper;

import org.caterly.cateringcompanyservice.company.api.dto.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CompanyMapper {
    CateringCompanyDTO toCateringCompanyDTO(CateringCompanyEntity cateringCompanyEntity);
    CateringCompanyEntity toCateringCompanyEntity(CateringCompanyDTO cateringCompanyDTO);
}