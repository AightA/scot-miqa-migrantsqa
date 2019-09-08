CREATE TABLE answers(
  id           SERIAL PRIMARY KEY,
  content      VARCHAR (150) NOT NULL,
  date_answered DATE NOT NULL,
  tags         VARCHAR(50),
  is_accepted  BOOLEAN NOT NULL,
  score        INT,
  question_id  INT REFERENCES questions(id),
  user_id      INT REFERENCES users(id)
)
