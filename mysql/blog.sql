/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-11-01 11:38:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `describe` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES ('1', '夏日结束前的逃亡|日照之旅1', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F3134846298%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631609225&t=1917651e2c9d05dd0145d9b9cb812350', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-30', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');
INSERT INTO `blogs` VALUES ('2', '夏日结束前的逃亡|日照之旅2', null, '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-27', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');
INSERT INTO `blogs` VALUES ('3', '夏日结束前的逃亡|日照之旅3', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotos.tuchong.com%2F456913%2Ff%2F7503439.jpg&refer=http%3A%2F%2Fphotos.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631609316&t=957020d37f5419726832390b2838fc7e', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-21', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `describe` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('1', '夏日结束前的逃亡|日照之旅1', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F3134846298%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631609225&t=1917651e2c9d05dd0145d9b9cb812350', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-30', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');
INSERT INTO `home` VALUES ('2', '夏日结束前的逃亡|日照之旅2', null, '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-27', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');
INSERT INTO `home` VALUES ('3', '夏日结束前的逃亡|日照之旅3', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotos.tuchong.com%2F456913%2Ff%2F7503439.jpg&refer=http%3A%2F%2Fphotos.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631609316&t=957020d37f5419726832390b2838fc7e', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。', '2021-08-21', '日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。日落，指太阳徐徐降下至西方的地平线下的过程，是夕阳时分，而确实的定义为日面完全没入地平线下的时间。用各种修辞手法对事物进行形象化的阐述。包括的修辞手法有比喻、拟人、夸张、双关、排比等，可以描述人，也可以描述物，通过描述可以让人或物形象更生动具体，给人明了的感。');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `auth_ids` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_ids` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'test2', 'test3', '[1]', 'test1');
