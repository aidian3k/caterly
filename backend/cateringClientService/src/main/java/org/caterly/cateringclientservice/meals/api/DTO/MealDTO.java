package org.caterly.cateringclientservice.meals.api.DTO;

import lombok.Data;

@Data
public class MealDTO {
    private Long id;
    private String typeOfFood;
    private String price;
    private CateringCompanyDTO cateringEntity;

    /**
     * Returns a copy of the CateringCompanyDTO
     * to protect internal representation.
     *
     * @return a copy of CateringCompanyDTO
     */
    public CateringCompanyDTO getCateringEntity() {
        if (this.cateringEntity == null) {
            return null;
        }
        CateringCompanyDTO copy = new CateringCompanyDTO();
        copy.setId(this.cateringEntity.getId());
        copy.setCity(this.cateringEntity.getCity());
        return copy;
    }

    /**
     * Sets a copy of the provided CateringCompanyDTO
     * to protect internal representation.
     *
     * @param cateringEntity the CateringCompanyDTO to set
     */
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
