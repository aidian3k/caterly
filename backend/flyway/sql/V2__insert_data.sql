-- Insert initial catering companies
INSERT INTO catering_company_entity (city)
VALUES
    ('Ściernisko'),
    ('San Francisco');

-- Insert initial catering food entries associated with catering companies
INSERT INTO catering_food_entity (price, type_of_food, catering_company_id)
VALUES
    (15.50, 'Pizza z ananasem', 1),
    (25.00, 'Sushi wegetariańskie', 2);

-- Insert initial clients
INSERT INTO client (city, email, piggy_bank_money)
VALUES
    ('Gotham', 'client1@example.com', 1000),
    ('Tokyo-3', 'client2@example.com', 1500);

-- Assuming catering_food_entity already exists (from Catering Service's migration),
-- Insert initial orders referencing catering food entities.
INSERT INTO orders (date_of_purchase, state, address, client_id, catering_food_entity_id, order_state)
VALUES
    ('2024-01-01', 'AC', 'client1 address', 1, 1, 'PURCHASED'),
    ('2024-01-02', 'DC', 'client2 address', 2, 2, 'SHIPPED');

