package org.caterly.cateringclientservice.feign;

import org.caterly.cateringclientservice.meals.api.DTO.CateringCompanyDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "companyService", url = "http://localhost:8082/company/api/")
public interface CompanyServiceClient {

    @GetMapping("companies/{id}")
    CateringCompanyDTO getCateringCompanyById(@PathVariable("id") Long id);
}