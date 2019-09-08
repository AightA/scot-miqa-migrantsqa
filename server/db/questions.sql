
CREATE TABLE questions(
  id                       SERIAL PRIMARY KEY,
  content                  VARCHAR (150) NOT NULL,
  date_posted              DATE NOT NULL,
  tags                     VARCHAR(50),
  is_answered              BOOLEAN NOT NULL,
  score                    INT,
  user_id                  INT REFERENCES users(id)
);
