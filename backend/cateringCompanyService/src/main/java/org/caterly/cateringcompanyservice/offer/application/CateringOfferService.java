package org.caterly.cateringcompanyservice.offer.application;

import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferWithCompanyDataDTO;

import java.util.List;

public interface CateringOfferService {
    List<CateringOfferDTO> getAllOffers(long request);
    CateringOfferDTO add(CateringOfferRequestDTO request);
    void delete(long cateringCompanyId, long foodId);
    List<CateringOfferWithCompanyDataDTO> getAllOffersWithCompanyData();
}
