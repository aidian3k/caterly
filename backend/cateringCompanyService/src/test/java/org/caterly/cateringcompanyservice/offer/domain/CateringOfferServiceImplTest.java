package org.caterly.cateringcompanyservice.offer.domain;

import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.mapper.OfferMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

class CateringOfferServiceImplTest {
    private static final double OFFER_1_PRICE = 12.99;
    private static final double OFFER_2_PRICE = 10.99;
    private static final long COMPANY_1_ID = 1L;
    private static final long OFFER_1_ID = 1L;
    private static final long OFFER_2_ID = 2L;
    private static final long OFFER_DTO_1_ID = 1L;
    private static final long OFFER_DTO_2_ID = 2L;

    @Mock
    private CateringOfferRepository cateringOfferRepository;

    @Mock
    private OfferMapper offerMapper;

    @InjectMocks
    private CateringOfferServiceImpl cateringOfferService;

    private CateringCompanyEntity company1;
    private CateringFoodEntity offer1;
    private CateringFoodEntity offer2;
    private CateringOfferDTO offerDTO1;
    private CateringOfferDTO offerDTO2;

    @BeforeEach
    void setUp() {
        openMocks(this);

        company1 = new CateringCompanyEntity(
                COMPANY_1_ID, "San Francisco", List.of());
        offer1 = new CateringFoodEntity(
                OFFER_1_ID, OFFER_1_PRICE, "Pizza", "abcd", company1);
        offer2 = new CateringFoodEntity(
                OFFER_2_ID, OFFER_2_PRICE, "Burger", "dcba", company1);

        offerDTO1 = new CateringOfferDTO();
        offerDTO1.setId(OFFER_DTO_1_ID);
        offerDTO1.setPrice(OFFER_1_PRICE);
        offerDTO1.setPicture("abcd");
        offerDTO1.setTypeOfFood("Pizza");

        offerDTO2 = new CateringOfferDTO();
        offerDTO2.setId(OFFER_DTO_2_ID);
        offerDTO2.setPrice(OFFER_2_PRICE);
        offerDTO2.setPicture("dcba");
        offerDTO2.setTypeOfFood("Burger");
    }

    @Test
    void testGetAllOffers() {
        // Given
        when(cateringOfferRepository.findAllByCompanyId(1L))
                .thenReturn(List.of(offer1, offer2));

        when(offerMapper.toCateringOfferDTO(offer1)).thenReturn(offerDTO1);
        when(offerMapper.toCateringOfferDTO(offer2)).thenReturn(offerDTO2);

        // When
        List<CateringOfferDTO> result = cateringOfferService
                .getAllOffers(COMPANY_1_ID);

        // Then
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Pizza", result.get(0).getTypeOfFood());
        assertEquals("Burger", result.get(1).getTypeOfFood());
        assertEquals("abcd", result.get(0).getPicture());
        assertEquals("dcba", result.get(1).getPicture());

        // Verify interactions
        verify(cateringOfferRepository).findAllByCompanyId(1L);
        verify(offerMapper).toCateringOfferDTO(offer1);
        verify(offerMapper).toCateringOfferDTO(offer2);
    }

    @Test
    void testGetAllOffersReturnsEmptyList() {
        // Given
        when(cateringOfferRepository.findAllByCompanyId(1L))
                .thenReturn(List.of());

        // When
        List<CateringOfferDTO> result = cateringOfferService
                .getAllOffers(COMPANY_1_ID);

        // Then
        assertNotNull(result);
        assertTrue(result.isEmpty());

        // Verify interactions
        verify(cateringOfferRepository).findAllByCompanyId(1L);
    }
}
