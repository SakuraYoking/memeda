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

/**轮播图**/
CREATE TABLE memeda_carouse(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(32),
    title VARCHAR(32),
    text VARCHAR(32),
    list  VARCHAR(32) 
);
INSERT INTO memeda_carouse VALUES(NULL,"/img/img01.png","/img/text01.svg","重塑生产力","经纬 M200 V2 系列");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img02.png","/img/text02.svg","随手掌控，一拍即合","Osmo Mobile 灵眸手机云台 3");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img03.png","/img/text03.svg","竞速视界，更快更清晰","DJI FPV 数字图传系统");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img04.png","/img/text04.png","轻装上阵，何惧挑战","Ronin SC 如影 SC 单手持微单稳定器");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img05.png","/img/text05.svg","玩出名堂","机甲大师 RoboMaster S1");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img06.png","/img/text06.svg","双屏一体，稳定如一","OSMO ACTION 灵眸运动相机");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img07.png","/img/text08.png","高瞻远瞩，以小见大","御 Mavic 2");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img08.png","/img/air.svg","随行新视界","御 Mavic Air");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img12.png","/img/t16.svg","大，有可为","T16 植保无人飞机");
INSERT INTO memeda_carouse VALUES(NULL,"/img/img13.png","/img/ling.svg","转动随心，灵感不停","灵眸 Osmo 口袋云台相机");

/**主页小轮播图图片**/
CREATE TABLE index_pic(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(255),
    title VARCHAR(32),
    text VARCHAR(32),
    list  VARCHAR(32) 
);
INSERT INTO index_pic VALUES(NULL,"/img/lun1.jpg, /img/lun2.jpg, /img/lun3.jpg, /img/lun4.jpg, /img/lun5.jpg,/img/lun6.jpg, /img/lun7.jpg, /img/lun8.png, /img/lun9.jpg, /img/lun10.jpg, /img/lun11.jpg, /img/lun12.jpg",NULL,NULL,NULL);
