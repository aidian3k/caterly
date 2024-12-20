package org.caterly.cateringclientservice.reviews.application;

import org.caterly.cateringclientservice.reviews.api.DTO.ReviewDTO;

import java.util.List;

public interface ReviewService {
    List<ReviewDTO> getAllReviews();
}