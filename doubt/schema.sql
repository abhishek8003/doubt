-- Create a user table
create database rest_api;
use rest_api;
CREATE TABLE user (
    id BIGINT PRIMARY KEY auto_increment,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT
);
insert into user values(1,"abhsihek","agalksjfg",4);

