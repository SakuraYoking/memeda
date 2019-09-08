-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-08 17:45:06
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `memeda`
--
CREATE DATABASE IF NOT EXISTS `memeda` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `memeda`;

-- --------------------------------------------------------

--
-- 表的结构 `dj_product`
--

DROP TABLE IF EXISTS `dj_product`;
CREATE TABLE IF NOT EXISTS `dj_product` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `lid` int(12) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `dj_product`
--

INSERT INTO `dj_product` (`uid`, `lid`, `img`, `title`, `subtitle`) VALUES
(1, 1, '/img/shop/01.jpg', '悟 Inspire 2', '出色的成像质量、强悍的飞行能力，为专业影视制作而生。'),
(2, 1, '/img/shop/02.jpg', '灵眸 Osmo Pro/RAW', 'M4/3传感器、工业级云台，拍摄1600万像素照片和专业4K视频。'),
(3, 1, '/img/shop/03.jpg', '悟 Inspire 1 Pro/RAW', 'M4/3相机出色的影像性能，开启专业级航拍的全新时代。'),
(4, 1, '/img/shop/04.jpg', '悟 Inspire 1', 'DJI 的核心技术融合，简易的飞行平台，带给您难忘体验。'),
(5, 2, '/img/shop/05.jpg', '禅思 Zenmuse X7', '禅思X7是为电影拍摄推出的紧凑型S35云台相机，可搭配在Inspire 2上使用。 X7最高可录制6K '),
(6, 2, '/img/shop/06.png', '禅思 Zenmuse X5S', 'M4/3航拍相机，可录5.2K CinemaDNG和4k Apple ProRes视频，满足影视航拍需求。'),
(7, 2, '/img/shop/07.jpg', '禅思 Zenmuse X4S', '1英寸传感器航拍相机，8.8mm/F2.8-11镜头，可录高达100Mbps的4K 60fps视频。'),
(8, 2, '/img/shop/08.jpg', '禅思 Zenmuse X5R', '配备工业级三轴增稳平台，支持录制RAW格式4K视频。'),
(9, 2, '/img/shop/09.jpg', '禅思 Zenmuse X5', '高画质M4/3影像传感器，可拍摄4K/30p视频。'),
(10, 3, '/img/shop/10.jpg', '如影 SC 单手持微单稳定器', '如影 SC 是针对无反/微单相机设计的专业云台，轻便且性能强大，结构紧凑控制精准，应用场景广泛多样，单人即可完成专业拍摄，为影视制作打开新的思路，创造更多可能。'),
(11, 3, '/img/shop/11.jpg', '如影 Ronin-S', '针对单反和微单的专业手持云台，小巧轻便可单手操作。'),
(12, 3, '/img/shop/12.jpg', '如影 Ronin 2', '动力强劲的三轴云台，能在任何场景和配备上稳定影像。'),
(13, 3, '/img/shop/13.jpg', '如影 Ronin-MX', '同时满足航拍与地拍的专业三轴云台，拍摄效果稳定流畅。'),
(14, 4, '/img/shop/14.png', 'DJI大师摇轮', 'Master Wheels 是大疆推出的一款专业级的摇轮控制器，采用高精度传感器配合全新的控制算法及精湛的...'),
(15, 4, '/img/shop/15.png', 'DJI体感控制器专业版', 'DJI体感控制器专业版采用了先进的通信技术配合全新的控制算法，使云台系统能实时响应体感操作，为专...'),
(16, 4, '/img/shop/16.jpg', 'CrystalSky', 'CrystalSky 高亮显示屏为航拍设计，在强光下能显示清晰的影像。内置DJI GO app提供飞行与拍摄控制...'),
(17, 4, '/img/shop/17.jpg', 'DJI 无线跟焦器', '专业级无线镜头控制系统，精度高达 ±0.02°。');

-- --------------------------------------------------------

--
-- 表的结构 `index_pic`
--

DROP TABLE IF EXISTS `index_pic`;
CREATE TABLE IF NOT EXISTS `index_pic` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `text` varchar(32) DEFAULT NULL,
  `list` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `index_pic`
--

INSERT INTO `index_pic` (`uid`, `pic`, `title`, `text`, `list`) VALUES
(1, '/img/lun1.jpg, /img/lun2.jpg, /img/lun3.jpg, /img/lun4.jpg, /img/lun5.jpg,/img/lun6.jpg, /img/lun7.jpg, /img/lun8.png, /img/lun9.jpg, /img/lun10.jpg, /img/lun11.jpg, /img/lun12.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `memeda_carouse`
--

DROP TABLE IF EXISTS `memeda_carouse`;
CREATE TABLE IF NOT EXISTS `memeda_carouse` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(32) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `text` varchar(32) DEFAULT NULL,
  `list` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `memeda_carouse`
--

INSERT INTO `memeda_carouse` (`uid`, `pic`, `title`, `text`, `list`) VALUES
(1, '/img/img01.png', '/img/text01.svg', '重塑生产力', '经纬 M200 V2 系列'),
(2, '/img/img02.png', '/img/text02.svg', '随手掌控，一拍即合', 'Osmo Mobile 灵眸手机云台 3'),
(3, '/img/img03.png', '/img/text03.svg', '竞速视界，更快更清晰', 'DJI FPV 数字图传系统'),
(4, '/img/img04.png', '/img/text04.png', '轻装上阵，何惧挑战', 'Ronin SC 如影 SC 单手持微单稳定器'),
(5, '/img/img05.png', '/img/text05.svg', '玩出名堂', '机甲大师 RoboMaster S1'),
(6, '/img/img06.png', '/img/text06.svg', '双屏一体，稳定如一', 'OSMO ACTION 灵眸运动相机'),
(7, '/img/img07.png', '/img/text08.png', '高瞻远瞩，以小见大', '御 Mavic 2'),
(8, '/img/img08.png', '/img/air.svg', '随行新视界', '御 Mavic Air'),
(9, '/img/img12.png', '/img/t16.svg', '大，有可为', 'T16 植保无人飞机'),
(10, '/img/img13.png', '/img/ling.svg', '转动随心，灵感不停', '灵眸 Osmo 口袋云台相机');

-- --------------------------------------------------------

--
-- 表的结构 `memeda_user`
--

DROP TABLE IF EXISTS `memeda_user`;
CREATE TABLE IF NOT EXISTS `memeda_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `uname_user` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `memeda_user`
--

INSERT INTO `memeda_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `uname_user`, `gender`) VALUES
(1, 'james', 'cxzaq7410', '625270910@qq.com', '18081339067', 'Hook', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
