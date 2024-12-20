package org.caterly.cateringclientservice.reviews.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.reviews.api.DTO.ReviewDTO;
import org.caterly.cateringclientservice.reviews.application.ReviewService;
import org.caterly.cateringclientservice.reviews.mapper.ReviewMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public final class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;

    /**
     * Retrieves all reviews and maps them to ReviewDTOs.
     *
     * @return a list of ReviewDTO objects containing review details
     */
    @Override
    public List<ReviewDTO> getAllReviews() {
        return reviewRepository.findAll().stream()
                .map(reviewMapper::toDto)
                .collect(Collectors.toList());
    }
}