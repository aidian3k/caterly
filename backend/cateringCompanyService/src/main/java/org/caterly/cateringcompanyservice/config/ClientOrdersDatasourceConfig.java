package org.caterly.cateringcompanyservice.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages = "org.caterly.cateringcompanyservice.order.domain.client",
        entityManagerFactoryRef = "clientOrdersEntityManagerFactory",
        transactionManagerRef = "clientOrdersTransactionManager"
)
public class ClientOrdersDatasourceConfig {

    @Bean
    @ConfigurationProperties("spring.datasource.client-order")
    public DataSourceProperties clientOrdersDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource clientOrdersDataSource() {
        return clientOrdersDataSourceProperties()
                .initializeDataSourceBuilder()
                .build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean
        clientOrdersEntityManagerFactory() {
        LocalContainerEntityManagerFactoryBean bean =
                new LocalContainerEntityManagerFactoryBean();
        bean.setDataSource(clientOrdersDataSource());
        bean.setPackagesToScan(
                "org.caterly.cateringcompanyservice.order.domain.client");

        JpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        bean.setJpaVendorAdapter(adapter);

        Map<String, String> props = new HashMap<>();
        props.put("hibernate.dialect",
                "org.hibernate.dialect.PostgreSQLDialect");
        props.put("hibernate.show_sql", "true");
        bean.setJpaPropertyMap(props);
        return bean;
    }

    @Bean
    public PlatformTransactionManager clientOrdersTransactionManager(
            @Qualifier("clientOrdersEntityManagerFactory")
            final LocalContainerEntityManagerFactoryBean
                    clientOrdersEntityManagerFactory) {
        return new JpaTransactionManager(
                Objects.requireNonNull(
                        clientOrdersEntityManagerFactory.getObject()));
    }
}
