-- MariaDB dump 10.19  Distrib 10.4.31-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: dada
-- ------------------------------------------------------
-- Server version	10.4.31-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `basket`
--

DROP TABLE IF EXISTS `basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `basket` (
  `userNo` varchar(10) NOT NULL,
  `mnuId` char(4) NOT NULL,
  KEY `basket_user_userNo` (`userNo`),
  KEY `basket_menu_mnuId` (`mnuId`),
  CONSTRAINT `basket_menu_mnuId` FOREIGN KEY (`mnuId`) REFERENCES `menu` (`mnuId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `basket_user_userNo` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basket`
--

LOCK TABLES `basket` WRITE;
/*!40000 ALTER TABLE `basket` DISABLE KEYS */;
INSERT INTO `basket` VALUES ('1','1001'),('1','1002'),('1','1003'),('10','1001'),('10','1005'),('3','2001'),('3','2002'),('7','2003'),('8','2001'),('8','2001'),('9','3001');
/*!40000 ALTER TABLE `basket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board` (
  `bordId` int(11) NOT NULL,
  `userNo` varchar(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `con` varchar(2000) NOT NULL,
  `regDa` date NOT NULL,
  `upDa` date NOT NULL,
  PRIMARY KEY (`bordId`),
  KEY `board_user_userNo` (`userNo`),
  CONSTRAINT `board_user_userNo` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'1','신제품 1+1 이벤트','신제품 1+1 에그','2022-01-09','2022-01-20'),(2,'8','설 선물 이벤트','설 선물 이벤트','2022-01-15','2022-01-15'),(3,'1','선물하기 이벤트','선물하기 이벤트','2022-03-28','2023-10-11'),(4,'8','SNS 공유 이벤트','SNS 공유 이벤트','2022-04-22','2023-01-23'),(5,'8','1+1 이벤트','1+1 이벤트','2022-07-11','2022-08-01'),(6,'8','추석선물 이벤트','추석선물 이벤트','2022-09-10','2022-09-10'),(7,'1','신제품 출시','신제품 출시','2022-09-21','2022-10-01'),(8,'8','가을 이벤트','가을 이벤트','2022-09-28','2022-09-28'),(9,'8','크리스마스 30%세일','크리스마스 30%세일','2022-12-21','2022-12-23'),(10,'1','추첨 이벤트','추첨 이벤트','2022-12-30','2022-01-02');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card` (
  `cdNo` int(11) NOT NULL,
  `cdNa` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cdNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'삼성카드 taptap O'),(2,'KB국민 청춘대로 톡톡카드'),(3,'taptap DRIVE'),(4,'카드의정석 EVERY 1'),(5,'KB국민 굿데이카드'),(6,'신한카드 Mr.Life'),(7,'네이버페이 taptap'),(8,'KB국민 톡톡 my point 카드'),(9,'KB국민 톡톡Pay카드'),(10,'삼성 iD ON 카드'),(11,'카드의정석 EVERY MILE SKY');
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `career`
--

DROP TABLE IF EXISTS `career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `career` (
  `care` varchar(50) DEFAULT NULL,
  `crNo` int(11) NOT NULL,
  KEY `career_crew_crNo` (`crNo`),
  CONSTRAINT `career_crew_cdNo` FOREIGN KEY (`crNo`) REFERENCES `crew` (`crNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career`
--

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;
INSERT INTO `career` VALUES ('xx제과 2년',1),('베이커리 자격증 보유',1),('xx제빵 3년',1),('xx제과제빵 10년',10),('베이커리 자격증 보유',10),('xx제빵 15년',3),('베이커리 자격증 보유',3),('베이커리 자격증 보유',7),('xx제과 2년',8),('xx제빵 4년',8),('베이커리 자격증 보유',9);
/*!40000 ALTER TABLE `career` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cdbenefits`
--

DROP TABLE IF EXISTS `cdbenefits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cdbenefits` (
  `cdNo` int(11) NOT NULL,
  `infoBene` varchar(200) DEFAULT NULL,
  KEY `cdbenefits_card_cdNo` (`cdNo`),
  CONSTRAINT `cdbenefits_card_cdNo` FOREIGN KEY (`cdNo`) REFERENCES `card` (`cdNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cdbenefits`
--

LOCK TABLES `cdbenefits` WRITE;
/*!40000 ALTER TABLE `cdbenefits` DISABLE KEYS */;
INSERT INTO `cdbenefits` VALUES (1,'최종결제금액 기준 0.1% 삼성포인트 추가 적립'),(1,'포인트 차감 사용'),(1,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(1,'삼성 구 멤버십 삼성 카드는 할인서비스 제외됩니다.'),(1,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(1,'자세한 내용은 삼성 멤버십 홈페이지 참조 (http://www.삼성.com)'),(1,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(1,'삼성 고객센터 국번 없이 111'),(2,'최종결제금액 기준 0.1% KB국민포인트 추가 적립'),(2,'포인트 차감 사용'),(2,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(2,'KB국민 구 멤버십 KB국민 카드는 할인서비스 제외됩니다.'),(2,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(2,'자세한 내용은 KB국민 멤버십 홈페이지 참조 (http://www.KB국민.com)'),(2,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(2,'KB국민 고객센터 국번 없이 222'),(3,'최종결제금액 기준 0.1% taptap 포인트 추가 적립'),(3,'포인트 차감 사용'),(3,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(3,'taptap 구 멤버십 taptap 카드는 할인서비스 제외됩니다.'),(3,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(3,'자세한 내용은 taptap 멤버십 홈페이지 참조 (http://www.taptap.com)'),(3,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(3,'taptap 고객센터 국번 없이 333'),(4,'최종결제금액 기준 0.1% 카드의정석 포인트 추가 적립'),(4,'포인트 차감 사용'),(4,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(4,'카드의정석 구 멤버십 카드의정석 카드는 할인서비스 제외됩니다.'),(4,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(4,'자세한 내용은 카드의정석 멤버십 홈페이지 참조 (http://www.카드의정석.com)'),(4,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(4,'카드의정석고객센터 국번 없이 444'),(5,'최종결제금액 기준 0.1% KB국민포인트 추가 적립'),(5,'포인트 차감 사용'),(5,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(5,'KB국민 구 멤버십 KB국민 카드는 할인서비스 제외됩니다.'),(5,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(5,'자세한 내용은 KB국민 멤버십 홈페이지 참조 (http://www.KB국민.com)'),(5,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(5,'KB국민 고객센터 국번 없이 222'),(6,'최종결제금액 기준 0.1% 신한 포인트 추가 적립'),(6,'포인트 차감 사용'),(6,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(6,'신한 구 멤버십 KB국민 카드는 할인서비스 제외됩니다.'),(6,'일부 점포 (휴게소, 역사, 인샵, 특수매장)은 제외됩니다.'),(6,'자세한 내용은 신한  멤버십 홈페이지 참조 (http://www.신한.com)'),(6,'각 카드 상품별 혜택은 카드사 사정에 따라 변경 또는 종료될 수 있습니다.'),(6,'신한 고객센터 국번 없이 222'),(7,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(8,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(9,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(10,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.'),(11,'1일1회 제한, 이용금액 최대 20만원 내에서 혜택 제공됩니다.');
/*!40000 ALTER TABLE `cdbenefits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cdinfo`
--

DROP TABLE IF EXISTS `cdinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cdinfo` (
  `cdTarget` varchar(50) DEFAULT NULL,
  `bene` varchar(50) DEFAULT NULL,
  `cdNo` int(11) NOT NULL,
  KEY `cdinfo_card_cdNo` (`cdNo`),
  CONSTRAINT `cdinfo_card_cdNo` FOREIGN KEY (`cdNo`) REFERENCES `card` (`cdNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cdinfo`
--

LOCK TABLES `cdinfo` WRITE;
/*!40000 ALTER TABLE `cdinfo` DISABLE KEYS */;
INSERT INTO `cdinfo` VALUES ('VVIP / VIP / GOLD','1,000원당 300원 할인',1),('SILVER / WHITE 일반','1,000원당 200원 할인',1),('VVIP / VIP','1,000원당 300원 할인',2),(' GOLD / SILVER / WHITE 일반','1,000원당 200원 할인',2),('VVIP','1,000원당 300원 할인',3),('VVIP / VIP / GOLD','1,000원당 300원 할인',4),('SILVER','1,000원당 200원 할인',4),('VVIP','1,000원당 300원 할인',5),('VIP / GOLD','1,000원당 200원 할인',5),('SILVER','1,000원당 100원 할인',5),('VVIP / VIP','1,000원당 300원 할인',6),('GOLD','1,000원당 200원 할인',6),('VVIP / VIP / GOLD','1,000원당 300원 할인',7),('SILVER / WHITE 일반','1,000원당 200원 할인',7),('VVIP','1,000원당 300원 할인',8),('VIP','1,000원당 200원 할인',8),(' GOLD / SILVER / WHITE 일반','1,000원당 100원 할인',8),('VVIP / VIP','1,000원당 300원 할인',9),(' GOLD / SILVER','1,000원당 200원 할인',9),('VVIP / VIP / GOLD / SILVER / WHITE 일반','1,000원당 300원 할인',10),('VVIP / VIP / GOLD','1,000원당 300원 할인',11),('SILVER / WHITE 일반','1,000원당 200원 할인',11);
/*!40000 ALTER TABLE `cdinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crew`
--

DROP TABLE IF EXISTS `crew`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crew` (
  `crNo` int(11) NOT NULL,
  `crNa` varchar(50) DEFAULT NULL,
  `crBir` char(8) DEFAULT NULL,
  `crAd` varchar(50) DEFAULT NULL,
  `crPh` char(15) DEFAULT NULL,
  `crIntr` varchar(100) DEFAULT NULL,
  `crPw` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`crNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crew`
--

LOCK TABLES `crew` WRITE;
/*!40000 ALTER TABLE `crew` DISABLE KEYS */;
INSERT INTO `crew` VALUES (1,'성동석','20001215','서울특별시 관악구','010-1234-5678','안녕하세요 저는 성동석 입니다.','17sde94'),(2,'문우현','19990514','서울특별시 강동구','010-9081-2102','안녕하세요 저는 문우현 입니다.','fw5939'),(3,'정민준','19980312','서울특별시 강서구','010-7391-4851','안녕하세요 저는 정민준 입니다.','60we255'),(4,'한시하','19970708','서울특별시 강북구','010-8339-5135','안녕하세요 저는 한시하 입니다.','sd7499'),(5,'송경아','19961128','서울특별시 광진구','010-2039-9365','안녕하세요 저는 송경아 입니다.','5832fw'),(6,'풍다혜','19950412','서울특별시 구로구','010-1564-4082','안녕하세요 저는 풍다혜 입니다.','9dw040'),(7,'황소민','19941227','서울특별시 금천구','010-5922-4943','안녕하세요 저는 황소민 입니다.','1468fwec'),(8,'조태웅','19930103','서울특별시 노원구','010-6842-7245','안녕하세요 저는 조태웅 입니다.','722gd56'),(9,'정철진','19920217','서울특별시 마포구','010-3729-0374','안녕하세요 저는 정철진 입니다.','3904frt'),(10,'김은하','19911125','서울특별시 서대문구','010-9365-7391','안녕하세요 저는 김은하 입니다.','123htt5');
/*!40000 ALTER TABLE `crew` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `imgNo` int(11) NOT NULL,
  `imgUrl` varchar(100) DEFAULT NULL,
  `mnuId` char(4) NOT NULL,
  PRIMARY KEY (`imgNo`),
  KEY `menu_image_mnuId` (`mnuId`),
  CONSTRAINT `menu_image_mnuId` FOREIGN KEY (`mnuId`) REFERENCES `menu` (`mnuId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'C:\\work\\image\\001.png','1001'),(2,'C:\\work\\image\\002.png','1002'),(3,'C:\\work\\image\\003.png','1003'),(4,'C:\\work\\image\\004.png','1004'),(5,'C:\\work\\image\\005.png','1005'),(6,'C:\\work\\image\\006.png','2001'),(7,'C:\\work\\image\\007.png','2002'),(8,'C:\\work\\image\\008.png','2003'),(9,'C:\\work\\image\\009.png','2004'),(10,'C:\\work\\image\\010.png','2005'),(11,'C:\\work\\image\\011.png','3001'),(12,'C:\\work\\image\\012.png','3002'),(13,'C:\\work\\image\\013.png','3003'),(14,'C:\\work\\image\\014.png','3004'),(15,'C:\\work\\image\\015.png','3005'),(16,'C:\\work\\image\\016.png','3006'),(17,'C:\\work\\image\\017.png','4001'),(18,'C:\\work\\image\\018.png','4002'),(19,'C:\\work\\image\\019.png','4003'),(20,'C:\\work\\image\\020.png','4004'),(21,'C:\\work\\image\\021.png','4005'),(22,'C:\\work\\image\\022.png','5001'),(23,'C:\\work\\image\\023.png','5002'),(24,'C:\\work\\image\\024.png','5003'),(25,'C:\\work\\image\\025.png','5004'),(26,'C:\\work\\image\\026.png','5005');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `mnuId` char(4) NOT NULL,
  `mnuNa` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `inven` int(11) DEFAULT NULL,
  `evntYN` tinyint(4) DEFAULT NULL,
  `mnuca` varchar(20) NOT NULL,
  `nmuYN` tinyint(4) DEFAULT NULL,
  `mnuInfo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`mnuId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES ('1001','에그마요 샌드위치',5200,10,1,'샐러드',0,NULL),('1002','햄치즈 샌드위치',5000,10,0,'샐러드',0,NULL),('1003','시저샐러드',4800,5,0,'샐러드',0,NULL),('1004','치킨샐러드',5400,5,0,'샐러드',0,NULL),('1005','BLT샌드위치',5000,5,0,'샐러드',1,NULL),('2001','아메리카노',5200,1000,0,'음료',0,NULL),('2002','카페라떼',5000,1000,0,'음료',0,NULL),('2003','카라멜마끼아또',4800,1000,0,'음료',0,NULL),('2004','그린티',5400,1000,1,'음료',0,NULL),('2005','밀크티',5000,1000,0,'음료',1,NULL),('3001','단팥빵',1500,30,0,'브레드',0,NULL),('3002','슈크림빵',1500,30,0,'브레드',0,NULL),('3003','바게트',2000,15,0,'브레드',0,NULL),('3004','연유바게트',3500,10,0,'브레드',0,NULL),('3005','소금빵',3400,30,1,'브레드',0,NULL),('3006','소세지빵',3500,25,0,'브레드',0,NULL),('4001','순우유',25000,5,0,'케이크',0,NULL),('4002','바스크치즈',18000,5,0,'케이크',0,NULL),('4003','샤를로트',27000,5,1,'케이크',0,NULL),('4004','생크림',22000,5,0,'케이크',0,NULL),('4005','초콜릿',26000,5,0,'케이크',1,NULL),('5001','에그타르트',5200,15,0,'디저트',0,NULL),('5002','레몬타르트',5000,15,0,'디저트',0,NULL),('5003','마들렌',4800,30,0,'디저트',0,NULL),('5004','마카롱',5400,30,0,'디저트',0,NULL),('5005','바움쿠엔',5000,30,0,'디저트',0,NULL);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `ordNo` int(11) NOT NULL,
  `userNo` varchar(10) NOT NULL,
  `mnuId` char(4) NOT NULL,
  `ordDa` datetime NOT NULL,
  `ordPri` int(11) NOT NULL,
  PRIMARY KEY (`ordNo`) USING BTREE,
  KEY `orders_menu_mnuId` (`mnuId`),
  KEY `orders_menu_userNo` (`userNo`),
  CONSTRAINT `orders_menu_mnuId` FOREIGN KEY (`mnuId`) REFERENCES `menu` (`mnuId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `orders_menu_userNo` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2','1001','2022-01-09 00:00:00',5200),(2,'2','1002','2022-01-15 00:00:00',5000),(3,'2','1003','2022-03-28 00:00:00',4800),(4,'3','2003','2022-04-22 00:00:00',4800),(5,'4','3005','2022-07-11 00:00:00',3400),(6,'4','2003','2022-09-10 00:00:00',4800),(7,'5','3006','2022-09-21 00:00:00',3500),(8,'6','4001','2022-09-28 00:00:00',18000),(9,'7','4004','2022-12-21 00:00:00',22000),(10,'7','5005','2022-12-30 00:00:00',5000);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userNo` varchar(10) NOT NULL,
  `adm` tinyint(4) DEFAULT NULL,
  `userNa` varchar(50) NOT NULL,
  `adress` varchar(1000) NOT NULL,
  `phNo` char(13) NOT NULL,
  `userId` varchar(20) NOT NULL,
  `userPw` varchar(20) NOT NULL,
  PRIMARY KEY (`userNo`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1',1,'성동석','서울특별시 관악구','010-1234-5678','rgijg0oywm','6bzct'),('10',0,'김은하','서울특별시 서대문구','010-9365-7391','c8yxfl5m84','0l65u'),('2',0,'문우현','서울특별시 강동구','010-9081-2102','gf2r8ag7kg','2c2xm'),('3',0,'정민준','서울특별시 강서구','010-7391-4851','i11dd77c30','dk0ep'),('4',0,'한시하','서울특별시 강북구','010-8339-5135','l2gcr3jsum','agk04'),('5',0,'송경아','서울특별시 광진구','010-2039-9365','jf78g0t65g','dovtp'),('6',0,'풍다혜','서울특별시 구로구','010-1564-4082','cxo2old1iy','uo883'),('7',0,'황소민','서울특별시 금천구','010-5922-4943','gacpk8rnht','103gj'),('8',1,'조태웅','서울특별시 노원구','010-6842-7245','zcu8zavebd','iets2'),('9',0,'정철진','서울특별시 마포구','010-3729-0374','wtnratn4hi','xmx5h');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-17 14:37:54
