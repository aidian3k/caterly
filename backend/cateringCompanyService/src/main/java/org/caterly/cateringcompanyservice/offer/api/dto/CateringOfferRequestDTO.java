package org.caterly.cateringcompanyservice.offer.api.dto;

import lombok.Data;

@Data
public class CateringOfferRequestDTO {
    private Double price;
    private String typeOfFood;
    private Byte[] picture;
    private Long companyId;

    public final Byte[] getPicture() {
        return picture.clone();
    }
}
