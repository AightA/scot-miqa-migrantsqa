-- Drop tables in case they already exist
DROP TABLE if exists users;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE questions(
  id           SERIAL PRIMARY KEY,
  ques_text    VARCHAR (150) NOT NULL,
  ques_date    DATE NOT NULL,
  tags         VARCHAR(50),
  isAnswered   BOOLEAN NOT NULL,
  score        INT
)

