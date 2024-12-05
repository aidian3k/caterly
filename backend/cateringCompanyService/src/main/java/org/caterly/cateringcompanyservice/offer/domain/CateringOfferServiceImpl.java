package org.caterly.cateringcompanyservice.offer.domain;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.company.api.DTO.CateringCompanyDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferWithCompanyDataDTO;
import org.caterly.cateringcompanyservice.offer.application.CateringOfferService;
import org.caterly.cateringcompanyservice.offer.mapper.OfferMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CateringOfferServiceImpl implements CateringOfferService {

    private final CateringOfferRepository cateringOfferRepository;
    private final OfferMapper offerMapper;

    @Override
    @SuppressWarnings("DesignForExtension")
    @Transactional(readOnly = true)
    public List<CateringOfferWithCompanyDataDTO>
    getAllOffersWithCompanyData() {
        List<CateringFoodEntity> cateringOffers =
                cateringOfferRepository.findAll();

        return cateringOffers.stream()
                .map(cateringFoodEntity -> {
                    CateringOfferWithCompanyDataDTO offerWithCompanyData =
                            new CateringOfferWithCompanyDataDTO();
                    offerWithCompanyData.setId(cateringFoodEntity.getId());
                    offerWithCompanyData.setPrice(
                            cateringFoodEntity.getPrice());
                    offerWithCompanyData.setTypeOfFood(
                            cateringFoodEntity.getTypeOfFood());

                    CateringCompanyDTO companyDTO = new CateringCompanyDTO();
                    companyDTO.setId(Objects.requireNonNull(
                            cateringFoodEntity.getCompany()).getId());
                    companyDTO.setCity(
                            cateringFoodEntity.getCompany().getCity());

                    offerWithCompanyData.setCateringEntity(companyDTO);
                    return offerWithCompanyData;
                })
                .toList();
    }

    @SuppressWarnings("DesignForExtension")
    @Override
    @Transactional(readOnly = true)
    public List<CateringOfferDTO> getAllOffers(
            final long cateringCompanyId
    ) {
        return cateringOfferRepository.findAllByCompanyId(cateringCompanyId)
                .stream()
                .map(offerMapper::toCateringOfferDTO).toList();
    }

    @SuppressWarnings("DesignForExtension")
    @Override
    @Transactional(readOnly = true)
    public CateringOfferDTO add(final CateringOfferRequestDTO request) {
        CateringFoodEntity entity = cateringOfferRepository.save(
                offerMapper.toCateringFoodEntity(request)
        );
        return offerMapper.toCateringOfferDTO(entity);
    }

    @SuppressWarnings("DesignForExtension")
    @Override
    @Transactional
    public void delete(final long cateringCompanyId, final long foodId) {
        cateringOfferRepository.deleteByCompanyIdAndId(
                cateringCompanyId, foodId);
    }
}
