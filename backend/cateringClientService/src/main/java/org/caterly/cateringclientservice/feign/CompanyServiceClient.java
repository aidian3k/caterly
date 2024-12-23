package org.caterly.cateringclientservice.feign;

import org.caterly.cateringclientservice.meals.api.DTO.CateringCompanyDTO;
import org.caterly.cateringclientservice.meals.api.DTO.MealDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "companyService",
        url = "http://cateringCompany:8080/company/api/")
public interface CompanyServiceClient {

    @GetMapping("companies/{id}")
    CateringCompanyDTO getCateringCompanyById(@PathVariable("id") Long id);

    @GetMapping("offers")
    List<MealDTO> getAllCateringOffers();
}
