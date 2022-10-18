INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Cameron', 'Butler', 1, null),
('Olivia', 'Sheboykin', 6, 1),
('Lucky', 'Stone', 7, 2),
('Christopher', 'Johnson', 4, 1),
('Ruger', 'Weston', 3, 4),
('Gracie', 'Rose', 10, 4),
('Bella', 'Cullen', 2, 10),
('Jacob', 'Black', 2, 10),
('Renesme', 'Cullen', 9, 4),
('Denali', 'Everest', 5, 1);

INSERT INTO role (title, salary, department_id) 
VALUES
('VP', 150000, 3),
('Sales Manager', 50000, 2),
('Secretary', 30000, 1),
('District Chief', 75000, 1),
('IT Team Lead', 70000, 2),
('Data Manager', 60000, 3),
('Chief of Staff', 72000, 1),
('Volunteer', 0, 1),
('Pilot', 80000, 1);

INSERT INTO department (name) VALUES
('Operations'),
('Sales'),
('Administration');