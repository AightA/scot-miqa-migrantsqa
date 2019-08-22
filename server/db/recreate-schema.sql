-- Drop tables in case they already exist
DROP TABLE if exists users;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);
