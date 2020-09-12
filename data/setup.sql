/* Can be used to setup a clean install of the database */

drop table messages;
drop table links;

create table messages
(message_id SMALLINT NOT NULL PRIMARY KEY,
author VARCHAR,
message_content VARCHAR);

create table links
(link_id SMALLINT NOT NULL PRIMARY KEY,
link_content VARCHAR);

/* Test Data */

INSERT INTO  messages (message_id, author, message_content)
VALUES (1, 'Dev', 'Test entry number 1');