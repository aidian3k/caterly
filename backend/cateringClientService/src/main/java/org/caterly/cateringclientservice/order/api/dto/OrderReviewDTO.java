package org.caterly.cateringclientservice.order.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderReviewDTO {
    private String reviewText;
    private Integer rating;
}
