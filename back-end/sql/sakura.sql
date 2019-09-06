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


/*shop列表*/
CREATE TABLE dj_product(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    lid  INT(12),
    img VARCHAR(255),
    title VARCHAR(32),
    subtitle VARCHAR(255)     
);
INSERT INTO dj_product VALUES(NULL,1,"/img/shop/01.jpg","悟 Inspire 2","出色的成像质量、强悍的飞行能力，为专业影视制作而生。");
INSERT INTO dj_product VALUES(NULL,1,"/img/shop/02.jpg","灵眸 Osmo Pro/RAW","M4/3传感器、工业级云台，拍摄1600万像素照片和专业4K视频。");
INSERT INTO dj_product VALUES(NULL,1,"/img/shop/03.jpg","悟 Inspire 1 Pro/RAW","M4/3相机出色的影像性能，开启专业级航拍的全新时代。");
INSERT INTO dj_product VALUES(NULL,1,"/img/shop/04.jpg","悟 Inspire 1","DJI 的核心技术融合，简易的飞行平台，带给您难忘体验。");
INSERT INTO dj_product VALUES(NULL,2,"/img/shop/05.jpg","禅思 Zenmuse X7","禅思X7是为电影拍摄推出的紧凑型S35云台相机，可搭配在Inspire 2上使用。 X7最高可录制6K ");
INSERT INTO dj_product VALUES(NULL,2,"/img/shop/06.png","禅思 Zenmuse X5S","M4/3航拍相机，可录5.2K CinemaDNG和4k Apple ProRes视频，满足影视航拍需求。");
INSERT INTO dj_product VALUES(NULL,2,"/img/shop/07.jpg","禅思 Zenmuse X4S","1英寸传感器航拍相机，8.8mm/F2.8-11镜头，可录高达100Mbps的4K 60fps视频。");
INSERT INTO dj_product VALUES(NULL,2,"/img/shop/08.jpg","禅思 Zenmuse X5R","配备工业级三轴增稳平台，支持录制RAW格式4K视频。");
INSERT INTO dj_product VALUES(NULL,2,"/img/shop/09.jpg","禅思 Zenmuse X5","高画质M4/3影像传感器，可拍摄4K/30p视频。");
INSERT INTO dj_product VALUES(NULL,3,"/img/shop/10.jpg","如影 SC 单手持微单稳定器","如影 SC 是针对无反/微单相机设计的专业云台，轻便且性能强大，结构紧凑控制精准，应用场景广泛多样，单人即可完成专业拍摄，为影视制作打开新的思路，创造更多可能。");
INSERT INTO dj_product VALUES(NULL,3,"/img/shop/11.jpg","如影 Ronin-S","针对单反和微单的专业手持云台，小巧轻便可单手操作。");
INSERT INTO dj_product VALUES(NULL,3,"/img/shop/12.jpg","如影 Ronin 2","动力强劲的三轴云台，能在任何场景和配备上稳定影像。");
INSERT INTO dj_product VALUES(NULL,3,"/img/shop/13.jpg","如影 Ronin-MX","同时满足航拍与地拍的专业三轴云台，拍摄效果稳定流畅。");
INSERT INTO dj_product VALUES(NULL,4,"/img/shop/14.png","DJI大师摇轮","Master Wheels 是大疆推出的一款专业级的摇轮控制器，采用高精度传感器配合全新的控制算法及精湛的...");
INSERT INTO dj_product VALUES(NULL,4,"/img/shop/15.png","DJI体感控制器专业版","DJI体感控制器专业版采用了先进的通信技术配合全新的控制算法，使云台系统能实时响应体感操作，为专...");
INSERT INTO dj_product VALUES(NULL,4,"/img/shop/16.jpg","CrystalSky","CrystalSky 高亮显示屏为航拍设计，在强光下能显示清晰的影像。内置DJI GO app提供飞行与拍摄控制...");
INSERT INTO dj_product VALUES(NULL,4,"/img/shop/17.jpg","DJI 无线跟焦器","专业级无线镜头控制系统，精度高达 ±0.02°。");




