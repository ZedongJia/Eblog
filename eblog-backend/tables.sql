
create table topicblock (
    id int not null auto_increment primary key,
	topic varchar(30) unique,
	label varchar(10) unique,
 	intro text
);

create table blog (
	id int not null auto_increment primary key,
	topic varchar(30),
	title tinytext,
	article text,
	date timestamp,
	foreign key(topic) references topicblock(topic)
);

create table linkpart(
	id int not null auto_increment primary key,
	label varchar(10),
	part varchar(10) unique,
	date timestamp,
	content text,
	foreign key(label) references topicblock(label)
);