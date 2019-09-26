-- Drop tables in case they already exist
DROP TABLE if exists users CASCADE;
DROP TABLE if exists questions CASCADE;
DROP TABLE if exists answers CASCADE;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  profile_pic VARCHAR(200) NULL
);


CREATE TABLE questions(
  id                       SERIAL PRIMARY KEY,
  content                  VARCHAR (150) NOT NULL,
  date_posted              DATE ,
  tags                     TEXT [],
  is_answered              BOOLEAN ,
  score                    INT DEFAULT 0 NOT NULL,
  user_id                  INT REFERENCES users(id)
);

CREATE TABLE answers(
  id           SERIAL PRIMARY KEY,
  content      VARCHAR (150) NOT NULL,
  date_answered DATE NOT NULL,
  tags         VARCHAR(50),
  is_accepted  BOOLEAN NOT NULL,
  score        INT,
  question_id  INT REFERENCES questions(id),
  user_id      INT REFERENCES users(id)
);