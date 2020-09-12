/* Can be used to setup a clean install of the database - syntax for SQLite */

drop table messages;
drop table links;

create table messages
(message_id INTEGER PRIMARY KEY,
author VARCHAR,
message_content VARCHAR,
message_timestamp VARCHAR);

create table links
(link_id INTEGER PRIMARY KEY,
link_content VARCHAR);

/* Test Data */

INSERT INTO  messages (message_id, author, message_content)
VALUES (1, 'Dev', 'Test entry number 1');