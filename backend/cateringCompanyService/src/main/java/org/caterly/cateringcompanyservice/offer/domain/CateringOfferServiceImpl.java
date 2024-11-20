package org.caterly.cateringcompanyservice.offer.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequest;
import org.caterly.cateringcompanyservice.offer.application.CateringOfferService;
import org.caterly.cateringcompanyservice.offer.mapper.OfferMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public final class CateringOfferServiceImpl implements CateringOfferService {

    private final CateringOfferRepository cateringOfferRepository;
    private final OfferMapper offerMapper;

    @Override
    public List<CateringOfferDTO> getAllOffers(
        final CateringOfferRequest request
    ) {
        return cateringOfferRepository.findAllByCompanyId(
            request.getCateringCompanyId()).stream()
                .map(offerMapper::toCateringOfferDTO).toList();
    }
}
