package org.caterly.cateringcompanyservice.offer.api.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CateringOfferRequest {
    @NotNull
    private Long cateringCompanyId;
}
