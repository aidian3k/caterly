package org.caterly.cateringcompanyservice.offer.domain;

import org.caterly.cateringcompanyservice.company.domain.CateringCompanyEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;
import java.util.Random;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class CateringOfferRepositoryTest {
    private static final int PICTURE_ARRAY_SIZE = 5;
    private final Random random = new Random();

    @Autowired
    private CateringOfferRepository cateringOfferRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void findAllByCompanyIdShouldReturnOffersForGivenCompanyId() {
        // Given: set up a catering company and associated food offers
        CateringCompanyEntity company = new CateringCompanyEntity();
        company.setCity("San Francisco");
        company = entityManager.persistAndFlush(company);

        final double offer1Price = 12.99;
        final byte[] offer1Picture = new byte[PICTURE_ARRAY_SIZE];
        random.nextBytes(offer1Picture);
        CateringFoodEntity offer1 = new CateringFoodEntity();
        offer1.setCompany(company);
        offer1.setPrice(offer1Price);
        offer1.setTypeOfFood("Pizza");
        offer1.setPicture(offer1Picture);
        entityManager.persist(offer1);

        final double offer2Price = 10.99;
        final byte[] offer2Picture = new byte[PICTURE_ARRAY_SIZE];
        random.nextBytes(offer2Picture);
        CateringFoodEntity offer2 = new CateringFoodEntity();
        offer2.setCompany(company);
        offer2.setPrice(offer2Price);
        offer2.setTypeOfFood("Burger");
        offer2.setPicture(offer2Picture);
        entityManager.persist(offer2);

        // Another company with a different offer
        CateringCompanyEntity otherCompany = new CateringCompanyEntity();
        otherCompany.setCity("New York");
        otherCompany = entityManager.persistAndFlush(otherCompany);

        final double otherOfferPrice = 8.99;
        final byte[] otherOfferPicture = new byte[PICTURE_ARRAY_SIZE];
        random.nextBytes(otherOfferPicture);
        CateringFoodEntity otherOffer = new CateringFoodEntity();
        otherOffer.setCompany(otherCompany);
        otherOffer.setPrice(otherOfferPrice);
        otherOffer.setTypeOfFood("Sushi");
        otherOffer.setPicture(otherOfferPicture);
        entityManager.persist(otherOffer);

        // Flush all changes to the database
        entityManager.flush();

        // When: calling the repository method
        List<CateringFoodEntity> result = cateringOfferRepository
                .findAllByCompanyId(company.getId());

        // Then: verify the results
        assertThat(result)
                .hasSize(2)
                .extracting(CateringFoodEntity::getTypeOfFood)
                .containsExactlyInAnyOrder("Pizza", "Burger");
    }

    @Test
    void findAllByCompanyIdShouldReturnEmptyListWhenNoOffersExistForCompanyId(
    ) {
        // Given: a company with no offers
        CateringCompanyEntity company = new CateringCompanyEntity();
        company.setCity("San Francisco");
        company = entityManager.persistAndFlush(company);

        // When: calling the repository method
        List<CateringFoodEntity> result = cateringOfferRepository
                .findAllByCompanyId(company.getId());

        // Then: verify the result is empty
        assertThat(result).isEmpty();
    }

    @Test
    void findAllByCompanyIdShouldReturnEmptyListWhenCompanyIdDoesNotExist() {
        // Given: a company with no offers
        final long notExistingCompanyId = 10021312;

        // When: calling the repository method
        List<CateringFoodEntity> result = cateringOfferRepository
                .findAllByCompanyId(notExistingCompanyId);

        // Then: verify the result is empty
        assertThat(result).isEmpty();
    }
}
