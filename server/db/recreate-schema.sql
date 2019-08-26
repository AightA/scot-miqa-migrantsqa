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

insert into users (username,email,password) values('user1','reyam@gmail.com','123455');
insert into users (username,email,password) values('user2','ahmed@gmail.com','73635');
insert into users (username,email,password) values('user3','zan@gmail.com','2516722');





CREATE TABLE questions(
  id                       SERIAL PRIMARY KEY,
  content                  VARCHAR (150) NOT NULL,
  date_posted              DATE NOT NULL,
  tags                     VARCHAR(50),
  is_answered              BOOLEAN NOT NULL,
  score                    INT,
  user_id                  INT REFERENCES users(id)
);

