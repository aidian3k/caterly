package org.caterly.cateringclientservice.meals.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.feign.CompanyServiceClient;
import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.caterly.cateringclientservice.meals.application.MealService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public final class MealServiceImpl implements MealService {

    private final CompanyServiceClient companyServiceClient;

    /**
     * Retrieves all meals, maps them to DTOs,
     * and enriches them with catering company data.
     *
     * @return a list of MealDTO objects containing meal details
     */
    @Override
    public List<MealDTO> getAllMeals() {
        return companyServiceClient.getAllCateringOffers();
    }
}
