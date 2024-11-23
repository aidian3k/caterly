package org.caterly.cateringcompanyservice.offer.api.dto;

import lombok.Data;

@Data
public class CateringOfferDTO {
    private Long id;
    private Double price;
    private String typeOfFood;
    private Byte[] picture;

    public final Byte[] getPicture() {
        return picture.clone();
    }
}
