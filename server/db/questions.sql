CREATE TABLE questions(
  id           SERIAL PRIMARY KEY,
  ques_text    VARCHAR (150) NOT NULL,
  ques_date    DATE NOT NULL,
  tags         VARCHAR(50),
  isAnswered   BOOLEAN NOT NULL,
  score        INT
)

insert into questions(ques_text,ques_date,tags,isAnswered,score) values('I have been served court papers in regards to parental','2013-12-10','paper',true,4);
insert into questions(ques_text,ques_date,tags,isAnswered,score) values('IMy wife and I are arriving in the UK in october and will','2015-02-21','paper',true,4);
insert into questions(ques_text,ques_date,tags,isAnswered,score) values('I have asked a question here before about visa for an','2014-07-27','paper',true,4);
insert into questions(ques_text,ques_date,tags,isAnswered,score) values('It not might be immigration question. let me explain','2018-04-12','paper',true,4);
insert into questions(ques_text,ques_date,tags,isAnswered,score) values('With a zambian passport, my father is British with a British','2019-06-08','paper',true,4);
insert into questions(ques_text,ques_date,tags,isAnswered,score) values('هل صحيح انه ينعم بالحرية والامن والامان','2019-04-21','paper',true,4);