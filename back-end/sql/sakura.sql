SET NAMES UTF8;
DROP DATABASE IF EXISTS memeda;
CREATE DATABASE memeda CHARSET=UTF8;
USE memeda;
/**用户信息**/
CREATE TABLE memeda_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname  VARCHAR(32),
upwd   VARCHAR(32),
email  VARCHAR(64),
phone  VARCHAR(16),
uname_user   VARCHAR(32),#用户ID，如天青色等烟雨
gender   INT   #0-女，1-男
);
INSERT INTO memeda_user VALUES
(1,"james","cxzaq7410","625270910@qq.com","18081339067","Hook","1");
SHOW TABLES;
DESC memeda_user;
select * from memeda_user;

