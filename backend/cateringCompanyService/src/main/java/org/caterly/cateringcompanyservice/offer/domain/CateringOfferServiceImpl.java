package org.caterly.cateringcompanyservice.offer.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
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
        final long cateringCompanyId
    ) {
        return cateringOfferRepository.findAllByCompanyId(cateringCompanyId)
                .stream()
                .map(offerMapper::toCateringOfferDTO).toList();
    }

    @Override
    public CateringOfferDTO add(CateringOfferRequestDTO request) {
        CateringFoodEntity entity = offerMapper.toCateringFoodEntity(request);
        cateringOfferRepository.saveAndFlush(entity);
        return offerMapper.toCateringOfferDTO(entity);
    }
}
