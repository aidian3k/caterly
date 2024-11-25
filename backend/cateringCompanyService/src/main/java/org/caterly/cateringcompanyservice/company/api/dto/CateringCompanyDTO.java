package org.caterly.cateringcompanyservice.company.api.dto;

import lombok.Data;
import java.util.List;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;

@Data
public class CateringCompanyDTO {
    private Long id;
    private String city;
    private List<CateringOfferDTO> foodEntities;
}