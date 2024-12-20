package org.caterly.cateringclientservice.order.api.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderReviewDTO {
    private String reviewText;
    private Integer rating;
}
