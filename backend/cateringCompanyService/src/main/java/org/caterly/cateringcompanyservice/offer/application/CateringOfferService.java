package org.caterly.cateringcompanyservice.offer.application;

import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;

import java.util.List;

public interface CateringOfferService {
    List<CateringOfferDTO> getAllOffers(long request);
}
