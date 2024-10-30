-- Insert initial clients
INSERT INTO client (city, email, piggy_bank_money)
VALUES
    ('Gotham', 'client1@example.com', 1000),
    ('Tokyo-3', 'client2@example.com', 1500);

-- Insert initial orders (assuming IDs match existing data in the company database)
INSERT INTO orders (date_of_purchase, state, address, client_id, catering_food_entity_id, order_state)
VALUES
    ('2024-01-01', 'AC', 'client1 address', 1, 1, 'PURCHASED'),
    ('2024-01-02', 'DC', 'client2 address', 2, 2, 'SHIPPED');