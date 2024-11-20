package org.caterly.cateringcompanyservice.offer.application;

import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequest;

import java.util.List;

public interface CateringOfferService {
    List<CateringOfferDTO> getAllOffers(CateringOfferRequest request);
}
