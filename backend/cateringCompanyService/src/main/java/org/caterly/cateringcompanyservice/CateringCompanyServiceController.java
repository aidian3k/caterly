package org.caterly.cateringcompanyservice;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public final class CateringCompanyServiceController {

    private final JdbcTemplate jdbcTemplate;

    public CateringCompanyServiceController(final JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/test")
    public String testCompanyService() {
        return "Catering Company Service is working!";
    }

    @GetMapping("/test-db")
    public String testDatabaseConnection() {
        try {
            jdbcTemplate.execute("SELECT 1");
            return "Database connection is working!test";
        } catch (Exception e) {
            return "Failed to connect to the database: " + e.getMessage();
        }
    }
}
