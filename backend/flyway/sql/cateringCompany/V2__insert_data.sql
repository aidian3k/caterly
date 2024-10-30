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