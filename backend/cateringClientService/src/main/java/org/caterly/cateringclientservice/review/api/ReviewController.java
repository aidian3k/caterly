package org.caterly.cateringclientservice.reviews.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.reviews.api.DTO.ReviewDTO;
import org.caterly.cateringclientservice.reviews.application.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders/reviews")
@RequiredArgsConstructor
public final class ReviewController {

    private final ReviewService reviewService;

    /**
     * Retrieves a list of all available reviews.
     *
     * @return ResponseEntity containing the list of ReviewDTO objects
     */
    @GetMapping
    public ResponseEntity<List<ReviewDTO>> getReviews() {
        return ResponseEntity.ok(reviewService.getAllReviews());
    }
}