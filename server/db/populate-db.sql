-- Users seed data
-- Note: Do NOT add passwords you use in real life. Passwords are now saved as clear text. This is very bad from security point of view. We will have a task to encrypt the passwords
INSERT INTO users (username,email, password) values ('admin','admin@cyf.org', 'admin_password');
INSERT INTO users (username,email, password) values ('user','user@cyf.org', 'user_password');
