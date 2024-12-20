package org.caterly.cateringclientservice.reviews.api.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class ReviewDTO {
    private Long id;
    private Date dateOfPurchase;
    private String state;
    private String description;
}