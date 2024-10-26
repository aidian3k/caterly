
-- Creating Catering Company Table
CREATE TABLE IF NOT EXISTS catering_company_entity (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255)
);

-- Creating Catering Food Table
CREATE TABLE IF NOT EXISTS catering_food_entity (
    id SERIAL PRIMARY KEY,
    price NUMERIC(10, 2),
    type_of_food VARCHAR(255),

    -- Foreign key to CateringCompanyEntity
    catering_company_id BIGINT REFERENCES catering_company_entity(id) ON DELETE CASCADE
);
