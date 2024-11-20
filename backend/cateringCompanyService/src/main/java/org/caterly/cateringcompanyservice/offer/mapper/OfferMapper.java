package org.caterly.cateringcompanyservice.offer.mapper;

import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.domain.CateringFoodEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OfferMapper {
    CateringOfferDTO toCateringOfferDTO(CateringFoodEntity cateringFoodEntity);
}
