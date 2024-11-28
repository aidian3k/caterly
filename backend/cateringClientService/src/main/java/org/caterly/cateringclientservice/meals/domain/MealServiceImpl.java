package org.caterly.cateringclientservice.meals.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.feign.CompanyServiceClient;
import org.caterly.cateringclientservice.meals.api.DTO.CateringCompanyDTO;
import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.caterly.cateringclientservice.meals.application.MealService;
import org.caterly.cateringclientservice.meals.mapper.MealMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;
    private final MealMapper mealMapper;
    private final CompanyServiceClient companyServiceClient;

    @Override
    public List<MealDTO> getAllMeals() {
        return mealRepository.findAll().stream()
                .map(meal -> {
                    MealDTO mealDTO = mealMapper.toDto(meal);
                    CateringCompanyDTO companyDTO = companyServiceClient.getCateringCompanyById(meal.getCateringCompanyId());
                    mealDTO.setCateringEntity(companyDTO);
                    return mealDTO;
                })
                .collect(Collectors.toList());
    }
}