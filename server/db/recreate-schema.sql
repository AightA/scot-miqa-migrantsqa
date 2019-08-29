-- Drop tables in case they already exist
DROP TABLE if exists users CASCADE;
DROP TABLE if exists questions CASCADE;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);


CREATE TABLE questions(
  id                       SERIAL PRIMARY KEY,
  content                  VARCHAR (150) NOT NULL,
  date_posted              DATE NOT NULL,
  tags                     VARCHAR(50),
  is_answered              BOOLEAN NOT NULL,
  score                    INT,
  user_id                  INT REFERENCES users(id)
);

GRANT ALL PRIVILEGES ON TABLE questions TO app_user;
GRANT ALL PRIVILEGES ON TABLE users TO app_user;
