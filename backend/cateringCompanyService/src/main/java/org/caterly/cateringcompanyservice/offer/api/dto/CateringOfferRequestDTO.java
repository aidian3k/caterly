package org.caterly.cateringcompanyservice.offer.api.dto;

import lombok.Data;

@Data
public class CateringOfferRequestDTO {
    private Double price;
    private String typeOfFood;
    private byte[] picture;
    private long companyId;
}
