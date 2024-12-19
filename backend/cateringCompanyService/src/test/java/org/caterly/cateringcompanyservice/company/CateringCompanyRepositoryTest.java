package org.caterly.cateringcompanyservice.company.domain;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class CateringCompanyRepositoryTest {

    @Autowired
    private CateringCompanyRepository cateringCompanyRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void findAllByCityShouldReturnCompaniesForGivenCity() {
        // Given: set up companies in different cities
        CateringCompanyEntity company1 = new CateringCompanyEntity();
        company1.setCity("San Francisco");
        entityManager.persist(company1);

        CateringCompanyEntity company2 = new CateringCompanyEntity();
        company2.setCity("San Francisco");
        entityManager.persist(company2);

        CateringCompanyEntity company3 = new CateringCompanyEntity();
        company3.setCity("New York");
        entityManager.persist(company3);

        // Flush all changes to the database
        entityManager.flush();

        // When: calling the repository method
        List<CateringCompanyEntity> result = cateringCompanyRepository.findAllByCity("San Francisco");

        // Then: verify the results
        assertThat(result)
                .hasSize(2)
                .extracting(CateringCompanyEntity::getCity)
                .containsOnly("San Francisco");
    }

    @Test
    void findAllByCityShouldReturnEmptyListWhenCityHasNoCompanies() {
        // Given: no companies in the specified city

        // When: calling the repository method
        List<CateringCompanyEntity> result = cateringCompanyRepository.findAllByCity("Los Angeles");

        // Then: verify the result is empty
        assertThat(result).isEmpty();
    }

    @Test
    void findAllByCityShouldReturnEmptyListWhenCityDoesNotExist() {
        // Given: no companies in the database

        // When: calling the repository method
        List<CateringCompanyEntity> result = cateringCompanyRepository.findAllByCity("NonExistentCity");

        // Then: verify the result is empty
        assertThat(result).isEmpty();
    }

    @Test
    void findAllCompaniesShouldReturnAllCompanies() {
        // Given: set up multiple companies
        CateringCompanyEntity company1 = new CateringCompanyEntity();
        company1.setCity("San Francisco");
        entityManager.persist(company1);

        CateringCompanyEntity company2 = new CateringCompanyEntity();
        company2.setCity("New York");
        entityManager.persist(company2);

        // Flush all changes to the database
        entityManager.flush();

        // When: calling the repository method
        List<CateringCompanyEntity> result = cateringCompanyRepository.findAllCompanies();

        // Then: verify the results
        assertThat(result)
                .hasSize(2)
                .extracting(CateringCompanyEntity::getCity)
                .containsExactlyInAnyOrder("San Francisco", "New York");
    }
}