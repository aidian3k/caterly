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

    -- Reference to Catering Food Entity (across databases, without enforcement)
    catering_food_entity_id BIGINT,

    -- Enum-like constraint for Order State
    order_state VARCHAR(50) CHECK (order_state IN ('PURCHASED', 'SHIPPED', 'FINISHED'))
);
