package org.caterly.cateringclientservice.reviews.mapper;

import org.caterly.cateringclientservice.reviews.api.DTO.ReviewDTO;
import org.caterly.cateringclientservice.reviews.domain.ReviewEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    ReviewDTO toDto(ReviewEntity reviewEntity);

    ReviewEntity toEntity(ReviewDTO reviewDTO);
}