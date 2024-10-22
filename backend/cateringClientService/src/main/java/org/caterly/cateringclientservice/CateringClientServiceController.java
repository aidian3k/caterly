package org.caterly.cateringclientservice;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public final class CateringClientServiceController {

    private final JdbcTemplate jdbcTemplate;

    public CateringClientServiceController(final JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/test")
    public String testClientService() {
        return "Catering Client Service is working!";
    }

    @GetMapping("/test-db")
    public String testDatabaseConnection() {
        try {
            jdbcTemplate.execute("SELECT 1");
            return "Database connection is working!";
        } catch (Exception e) {
            return "Failed to connect to the database: " + e.getMessage();
        }
    }
}
