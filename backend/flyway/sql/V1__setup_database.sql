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

-- Creating Client Table
CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    piggy_bank_money INTEGER
);

-- Creating Order Table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    date_of_purchase DATE,
    state VARCHAR(255),
    address VARCHAR(255),

    -- Foreign key to Client
    client_id BIGINT REFERENCES client(id) ON DELETE CASCADE,

    -- Foreign key to CateringFoodEntity
    catering_food_entity_id BIGINT REFERENCES catering_food_entity(id) ON DELETE SET NULL,

    -- Enum-like constraint for Order State (use CHECK constraint as PostgreSQL doesn't have native ENUMs like MySQL)
    order_state VARCHAR(50) CHECK (order_state IN ('PURCHASED', 'SHIPPED', 'FINISHED'))
);