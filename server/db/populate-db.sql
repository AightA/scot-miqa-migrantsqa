-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords

INSERT INTO users (username,email, password) values ('admin','admin@cyf.org', 'admin_password');
INSERT INTO users (username,email, password) values ('user','user@cyf.org', 'user_password');
INSERT INTO users (username,email,password) values('reyam','reyam@gmail.com','123455');
INSERT INTO users (username,email,password) values('ahmed','ahmed@gmail.com','73635');
INSERT INTO users (username,email,password) values('zan','zan@gmail.com','2516722');

insert into users (username,email,password,profile_pic) values('reyam','reyam@gmail.com','123455','https://image.flaticon.com/icons/png/512/145/145987.png');
insert into users (username,email,password,profile_pic) values('ahmed','ahmed@gmail.com','73635','https://www.shareicon.net/download/2016/09/01/822711_user_512x512.png');
insert into users (username,email,password,profile_pic) values('zan','zan@gmail.com','2516722', 'https://image.flaticon.com/icons/png/512/145/145987.png');

INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id  ) values('I have been served court papers in regards to parental','2013-12-10','paper',true,4,1);
INSERT INTO questions (content,date_posted,tags,is_answered ,score,user_id ) values('My wife and I are arriving in the UK in october and will','2015-02-21','wife',true,4,2);
INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id  ) values('I have asked a question here before about visa for an','2014-07-27','visa',true,4,1);
INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id  ) values('It not might be immigration question. let me explain','2018-04-12','immigrantion',true,4,2);
INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id ) values('With a zambian passport, my father is British with a British','2019-06-08','zambian',true,4,2);
INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id ) values('هل صحيح انه ينعم بالحرية والامن والامان','2019-04-21','حرية',false,4,1);
