-- Creating Client Table
CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    piggy_bank_money INTEGER
);

-- Creating Order Table
CREATE TABLE IF NOT EXISTS orders (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT REFERENCES client(id) ON DELETE CASCADE,
    date_of_purchase DATE,
    address VARCHAR(255),
    status VARCHAR(50) CHECK (status IN ('UNPAID', 'PURCHASED', 'SHIPPED', 'FINISHED'))
);

CREATE TABLE IF NOT EXISTS meal_entity (
    id SERIAL PRIMARY KEY,
    type_of_food VARCHAR(255),
    price VARCHAR(255),
    catering_company_id BIGINT
);

CREATE TABLE IF NOT EXISTS order_meals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id BIGINT REFERENCES orders(id),
    meal_id INT REFERENCES meal_entity(id),
    quantity INT CHECK (quantity > 0)
);

-- V1__Add_password_column_to_client.sql
ALTER TABLE client ADD COLUMN password VARCHAR(255);
-- V1__Add_role_column_to_client.sql
ALTER TABLE client ADD COLUMN role VARCHAR(255);
