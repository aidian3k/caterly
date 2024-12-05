package org.caterly.cateringcompanyservice.offer.mapper;

import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;
import org.caterly.cateringcompanyservice.company.domain.CateringCompanyRepository;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
import org.caterly.cateringcompanyservice.offer.domain.CateringFoodEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public abstract class OfferMapper {
    @Autowired
    private CateringCompanyRepository cateringCompanyRepository;

    public abstract CateringOfferDTO toCateringOfferDTO(
            CateringFoodEntity cateringFoodEntity
    );

    @Mapping(target = "company", source = "companyId")
    @Mapping(target = "id", ignore = true)
    public abstract CateringFoodEntity toCateringFoodEntity(
            CateringOfferRequestDTO cateringOfferRequestDTO
    );

    public final CateringCompanyEntity resolveCateringCompanyEntity(
            final Long companyId) {
        if (companyId == null) {
            return null;
        }
        return cateringCompanyRepository.findById(companyId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Catering company not found for ID: " + companyId
                ));
    }
}
