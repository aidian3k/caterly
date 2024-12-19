-- Insert initial clients
INSERT INTO client (city, email, piggy_bank_money)
VALUES
    ('Gotham', 'client1@example.com', 1000),
    ('Tokyo-3', 'client2@example.com', 1500);

-- Insert initial orders (assuming IDs match existing data in the company database)
INSERT INTO orders (address, client_id, payment_method)
VALUES
    ('client1 address', 1, 'credit_card'),
    ('client2 address', 2, 'credit_card');

-- Insert initial meals
INSERT INTO meal_entity (type_of_food, price, catering_company_id)
VALUES
    ('Pizza', '10.99', 1),
    ('Sushi', '15.99', 2);

INSERT INTO order_meals (order_id, meal_id, quantity)
VALUES
    (1, 1, 2),
    (2, 2, 3),
    (2, 1, 2);