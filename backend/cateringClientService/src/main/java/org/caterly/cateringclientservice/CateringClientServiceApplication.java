package org.caterly.cateringclientservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CateringClientServiceApplication {

    public static void main(final String[] args) {
        SpringApplication.run(CateringClientServiceApplication.class, args);
    }

}
