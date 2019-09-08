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

-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2013-12-10','paper',true,4,1,1);
-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2015-02-21','paper',true,4,1,2);
-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2014-07-27','paper',true,4,2,3);
-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2018-04-12','paper',true,4,2,1);
-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2019-06-08','paper',true,4,3,2);
-- INSERT INTO answers (content,date_answered,tags,is_accepted,score,question_id,user_id) values('Answer text ','2019-04-21','paper',true,4,3,3);