package org.caterly.cateringcompanyservice.offer.api.dto;

import lombok.Data;
import org.caterly.cateringcompanyservice.company.api.DTO.CateringCompanyDTO;

@Data
public final class CateringOfferWithCompanyDataDTO {
    private Long id;
    private Double price;
    private String typeOfFood;
    private CateringCompanyDTO cateringEntity;

    public CateringCompanyDTO getCateringEntity() {
        if (this.cateringEntity == null) {
            return null;
        }
        CateringCompanyDTO copy = new CateringCompanyDTO();
        copy.setId(this.cateringEntity.getId());
        copy.setCity(this.cateringEntity.getCity());
        return copy;
    }

    public void setCateringEntity(final CateringCompanyDTO cateringEntity) {
        if (cateringEntity == null) {
            this.cateringEntity = null;
        } else {
            CateringCompanyDTO copy = new CateringCompanyDTO();
            copy.setId(cateringEntity.getId());
            copy.setCity(cateringEntity.getCity());
            this.cateringEntity = copy;
        }
    }
}
