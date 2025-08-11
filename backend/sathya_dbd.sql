-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: sathya_dbd
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `company_id` varchar(30) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `location_id` varchar(30) DEFAULT NULL,
  `spoc_name` varchar(100) DEFAULT NULL,
  `spoc_contact_no` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `fk_location` (`location_id`),
  CONSTRAINT `fk_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('CO001','CSL Berigai-pvt ltd','123, Main Street, Berigai,coimbatore ',NULL,'prasanth','94849048493'),('CO002','BKS Textiles PVT LTD','Perundurai',NULL,'Arun Kumar','9483857485');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `completion_status`
--

DROP TABLE IF EXISTS `completion_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `completion_status` (
  `completion_id` int NOT NULL AUTO_INCREMENT,
  `rec_id` int DEFAULT NULL,
  `area_completed` float DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `value` float DEFAULT NULL,
  `billed_area` float DEFAULT NULL,
  `billed_value` float DEFAULT NULL,
  `balance_area` float DEFAULT NULL,
  `balance_value` float DEFAULT NULL,
  `work_status` varchar(50) DEFAULT NULL,
  `billing_status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`completion_id`),
  KEY `rec_id` (`rec_id`),
  CONSTRAINT `completion_status_ibfk_1` FOREIGN KEY (`rec_id`) REFERENCES `po_reckoner` (`rec_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `completion_status`
--

LOCK TABLES `completion_status` WRITE;
/*!40000 ALTER TABLE `completion_status` DISABLE KEYS */;
INSERT INTO `completion_status` VALUES (22,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,12,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(36,15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(37,16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,17,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,18,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `completion_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumables_master`
--

DROP TABLE IF EXISTS `consumables_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumables_master` (
  `consumable_id` int NOT NULL AUTO_INCREMENT,
  `consumable_name` varchar(50) NOT NULL,
  PRIMARY KEY (`consumable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumables_master`
--

LOCK TABLES `consumables_master` WRITE;
/*!40000 ALTER TABLE `consumables_master` DISABLE KEYS */;
INSERT INTO `consumables_master` VALUES (1,'Grinding Machine'),(2,'Paint mixing machine'),(3,'Paint Brush'),(4,'Spike Roller Paint'),(5,'Trowel');
/*!40000 ALTER TABLE `consumables_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `description_of_work`
--

DROP TABLE IF EXISTS `description_of_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `description_of_work` (
  `item_id` varchar(30) NOT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `description_of_work`
--

LOCK TABLES `description_of_work` WRITE;
/*!40000 ALTER TABLE `description_of_work` DISABLE KEYS */;
INSERT INTO `description_of_work` VALUES ('Item-1','Sticker for cooling water supply'),('Item-10','Sticker for Non Peso Tank'),('Item-11','Sticker for Holding Tank'),('Item-12','Structural Painting Work'),('Item-13','Nitrogen 2 coat redoxide + Canary Yellow'),('Item-14','Raw water 2 coat redoxide + sea green'),('Item-15','PSV quench 2 coat redoxide + black'),('Item-16','Vacuum White'),('Item-17','Plant Air 2 coat redoxide + sky blue'),('Item-18','Structural paint incl cleaner 2 coat paint'),('Item-19','Air line 1 coat blue'),('Item-2','Sticker for cooling water return'),('Item-20','Cooling water line 1 coat dark green'),('Item-21','Raw water line 1 coat sea green'),('Item-22','Structural line painting'),('Item-23','Primer coating with supply'),('Item-24','Cooling water line painting'),('Item-25','Chilled water line painting'),('Item-26','Chilled brine line painting'),('Item-27','Nitrogen line painting'),('Item-28','Process water line painting work'),('Item-29','PSV line painting'),('Item-3','Sticker for process water'),('Item-30','Eye wash shower line'),('Item-31','Raw water line'),('Item-32','Instrument air line'),('Item-33','Plant air line painting'),('Item-34','LP Steam line painting work'),('Item-35','MP Stam line painting'),('Item-36','HSD line painting work'),('Item-37','Cooling water band supply and pasting'),('Item-38','Chilled water band supply and pasting'),('Item-39','Chilled brine band supply and pasting'),('Item-4','Sticker for Eye wash'),('Item-40','Nitrogen bank supply and pasting'),('Item-41','Process water band supply and pasting'),('Item-42','PSV band supply and pasting'),('Item-43','Eye wash shower band supply and pasting'),('Item-44','Raw water band supply and pasting'),('Item-45','Instrument air band supply and pasting'),('Item-46','Plant air band supply and pasting'),('Item-47','LP Steam bank supply and pasting'),('Item-48','MP Steam band supply and pasting'),('Item-49','HSD Bank supply and pasting'),('Item-5','Sticker for High speed diesel'),('Item-50','1\" Line arrow supply and pasting'),('Item-51','1.5\" line arrow supply and pasting'),('Item-52','2\" line arrow supply and pasting'),('Item-53','3\" line arrow supply and pasting'),('Item-54','4\" line arrow supply and pasting'),('Item-55','6\" line arrow supply and pasting'),('Item-56','8\" line arrow supply and pasting'),('Item-57','10\" line arrow supply and pasting'),('Item-58','12\" line arrow supply and pasting'),('Item-59','1\" line font stickering work'),('Item-6','Sticker for Vaccum'),('Item-60','1.5\" line font stickering work'),('Item-61','2\" line font stickering work'),('Item-62','3\" line font stickering work'),('Item-63','4\" line font stickering work'),('Item-64','6\" line font stickering work'),('Item-65','8\" line font stickering work'),('Item-66','10\" line font stickering work'),('Item-67','12\" line font stickering work'),('Item-7','Sticker for scrubber'),('Item-8','Sticker for LEV Scrubber'),('Item-9','Sticker for Peso Tank');
/*!40000 ALTER TABLE `description_of_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_master`
--

DROP TABLE IF EXISTS `driver_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driver_name` varchar(255) DEFAULT NULL,
  `driver_mobile` varchar(20) DEFAULT NULL,
  `driver_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_master`
--

LOCK TABLES `driver_master` WRITE;
/*!40000 ALTER TABLE `driver_master` DISABLE KEYS */;
INSERT INTO `driver_master` VALUES (1,'raj','9483948373','chennai'),(3,'tharun','958398394','gandhipuram'),(4,'prasanth','9483948384','example address'),(5,'hari','88849483423','example'),(6,'ram','9484939483','pn palayam');
/*!40000 ALTER TABLE `driver_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_department`
--

DROP TABLE IF EXISTS `emp_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_department`
--

LOCK TABLES `emp_department` WRITE;
/*!40000 ALTER TABLE `emp_department` DISABLE KEYS */;
INSERT INTO `emp_department` VALUES (1,'Engineering'),(2,'Management'),(3,'Accounts'),(4,'HR Management'),(5,'Marketing');
/*!40000 ALTER TABLE `emp_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_designation`
--

DROP TABLE IF EXISTS `emp_designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_designation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `designation` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_designation`
--

LOCK TABLES `emp_designation` WRITE;
/*!40000 ALTER TABLE `emp_designation` DISABLE KEYS */;
INSERT INTO `emp_designation` VALUES (1,'Site Supervisor'),(2,'Accountant'),(3,'HR Manager'),(5,'Marketing Executive'),(6,'Site Engineer');
/*!40000 ALTER TABLE `emp_designation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_gender`
--

DROP TABLE IF EXISTS `emp_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_gender` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gender` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_gender`
--

LOCK TABLES `emp_gender` WRITE;
/*!40000 ALTER TABLE `emp_gender` DISABLE KEYS */;
INSERT INTO `emp_gender` VALUES (1,'Male'),(2,'Female'),(3,'Other');
/*!40000 ALTER TABLE `emp_gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_status`
--

DROP TABLE IF EXISTS `emp_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_status`
--

LOCK TABLES `emp_status` WRITE;
/*!40000 ALTER TABLE `emp_status` DISABLE KEYS */;
INSERT INTO `emp_status` VALUES (1,'Active'),(2,'Inactive');
/*!40000 ALTER TABLE `emp_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_master`
--

DROP TABLE IF EXISTS `employee_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_master` (
  `emp_id` varchar(30) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `date_of_joining` date NOT NULL,
  `company` varchar(100) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `company_email` varchar(100) NOT NULL,
  `current_address` varchar(255) NOT NULL,
  `permanent_address` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `gender_id` int NOT NULL,
  `dept_id` int NOT NULL,
  `emp_type_id` int NOT NULL,
  `designation_id` int NOT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `fk_gender` (`gender_id`),
  KEY `fk_department` (`dept_id`),
  KEY `fk_employment_type` (`emp_type_id`),
  KEY `fk_designation` (`designation_id`),
  KEY `fk_employee_status` (`status_id`),
  CONSTRAINT `fk_department` FOREIGN KEY (`dept_id`) REFERENCES `emp_department` (`id`),
  CONSTRAINT `fk_designation` FOREIGN KEY (`designation_id`) REFERENCES `emp_designation` (`id`),
  CONSTRAINT `fk_employee_status` FOREIGN KEY (`status_id`) REFERENCES `emp_status` (`id`),
  CONSTRAINT `fk_employment_type` FOREIGN KEY (`emp_type_id`) REFERENCES `employment_type` (`id`),
  CONSTRAINT `fk_gender` FOREIGN KEY (`gender_id`) REFERENCES `emp_gender` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_master`
--

LOCK TABLES `employee_master` WRITE;
/*!40000 ALTER TABLE `employee_master` DISABLE KEYS */;
INSERT INTO `employee_master` VALUES ('EMP001','Ezhavahgan','1988-07-13','2024-06-19','SathyaCoating PVT LTD','Edayarpalayam','9856741246','ezhavahgan001@sathyacoating.com','221 Chinnammal Nagar, Edayarpalayam, Vadavalli Road, Coimbatore-641041','221 Chinnammal Nagar, Edayarpalayam, Vadavalli Road, Coimbatore-641041','2025-07-29 15:57:40',1,2,1,6,1);
/*!40000 ALTER TABLE `employee_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employment_type`
--

DROP TABLE IF EXISTS `employment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employment_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employment_type`
--

LOCK TABLES `employment_type` WRITE;
/*!40000 ALTER TABLE `employment_type` DISABLE KEYS */;
INSERT INTO `employment_type` VALUES (1,'Full-Time'),(2,'Contract'),(3,'Part-Time');
/*!40000 ALTER TABLE `employment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense_category`
--

DROP TABLE IF EXISTS `expense_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `exp_category` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense_category`
--

LOCK TABLES `expense_category` WRITE;
/*!40000 ALTER TABLE `expense_category` DISABLE KEYS */;
INSERT INTO `expense_category` VALUES (1,'Room rent'),(2,'Labour food'),(3,'Freight'),(4,'Travelling/Auto'),(5,'Consumables'),(6,'Site er food');
/*!40000 ALTER TABLE `expense_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense_details`
--

DROP TABLE IF EXISTS `expense_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `details` varchar(300) NOT NULL,
  `exp_category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `exp_category_id` (`exp_category_id`),
  CONSTRAINT `expense_details_ibfk_1` FOREIGN KEY (`exp_category_id`) REFERENCES `expense_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense_details`
--

LOCK TABLES `expense_details` WRITE;
/*!40000 ALTER TABLE `expense_details` DISABLE KEYS */;
INSERT INTO `expense_details` VALUES (1,'Incharge room rent',1),(2,'Incharge team food',2),(3,'Site food',6),(4,'Oragadam to Hosur bus fare',4),(5,'Auto from Hosur bus stand to Motely Appliances up and down',4),(6,'Hosur to Sriperumbudur bus fare',4),(7,'Sriperumbudur to Oragadam Ola cab',4),(8,'Oragadam to AOAI site Ola cab up and down',4),(9,'AOAI to Sunguvarchattram bus for 5 persons',4),(10,'Sunguvarchattram to Sriperumbudur auto',4),(11,'Sriperumbudur to Oragadam bus fare',4),(12,'Oragadam to Chunsung site material unloading up and down',3),(13,'Auto with CPS material for Incharge team',4),(14,'Room to Chunsung site auto with material',4),(15,'Return auto and bus charge for 3 persons',4),(16,'Room to Chunsung site auto charge',4),(17,'Return auto charge',4),(18,'Sriperumbudur to Ranipet bus and auto for Incharge team',4),(19,'Oragadam to Perundurai bus fare for Incharge team',4),(20,'Oragadam to Tenkasi bus ticket',4),(21,'VPG site to Oragadam auto',4),(22,'4 inch roller set',5),(23,'1 inch masking tape',5),(24,'Sample material porter charge',3),(25,'HJ Engineering sample work auto fare',4),(26,'Enamel yellow paint',5),(27,'Paint brush',5),(28,'Material transport from SSMPL to AOAI',3),(29,'4 inch roller 3 sets',5),(30,'Masking tape 5 bundles',5),(31,'Tea',2),(32,'Bike petrol',4),(33,'Plywood',5),(34,'Incharge dress purchase',5),(35,'Mixing mug 2 units',5),(36,'9 inch roller',5),(37,'Bosch grinding machine',5),(38,'Grinding wheel',5),(39,'Exterior 9 inch roller',5),(40,'Trowel 1mm 2 units',5),(41,'Spike roller 2 units',5),(42,'Spike shoe 2 sets',5),(43,'Trowel 1.5mm 2 units',5),(44,'Trowel 2mm 2 units',5),(45,'VPG site mixing buckets 2 units',5),(46,'3-pin plug for mixing machine',5);
/*!40000 ALTER TABLE `expense_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incharge_details`
--

DROP TABLE IF EXISTS `incharge_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incharge_details` (
  `incharge_id` varchar(30) NOT NULL,
  `incharge_name` varchar(100) NOT NULL,
  `incharge_role_id` varchar(30) NOT NULL,
  PRIMARY KEY (`incharge_id`),
  KEY `incharge_role_id` (`incharge_role_id`),
  CONSTRAINT `incharge_details_ibfk_1` FOREIGN KEY (`incharge_role_id`) REFERENCES `site_incharge` (`incharge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incharge_details`
--

LOCK TABLES `incharge_details` WRITE;
/*!40000 ALTER TABLE `incharge_details` DISABLE KEYS */;
INSERT INTO `incharge_details` VALUES ('ID001','Aravind Kumar','SI001'),('ID002','Suresh Balaji','SI001'),('ID003','Priya Venkatesh','SI001'),('ID004','Karthik Rajan','SI001'),('ID005','Lakshmi Narayanan','SI001'),('ID006','Vigneshwaran Pillai','SI001'),('ID007','Anitha Subramanian','SI001'),('ID008','Manikandan Nair','SI001'),('ID009','Saravanan Gopi','SI001'),('ID010','Deepa Krishnan','SI001'),('ID011','Ramesh Srinivasan','SI002'),('ID012','Nandhini Murugan','SI002'),('ID013','Gokul Prasath','SI002'),('ID014','Vinoth Kannan','SI002'),('ID015','Meena Sathish','SI002'),('ID016','Balamurugan Ram','SI002'),('ID017','Kavitha Selvaraj','SI002'),('ID018','Praveen Chandran','SI002'),('ID019','Senthil Kumar','SI002'),('ID020','Divya Bharathi','SI002'),('ID021','subash','SI001');
/*!40000 ALTER TABLE `incharge_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_category`
--

DROP TABLE IF EXISTS `item_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_category` (
  `category_id` varchar(30) NOT NULL,
  `category_name` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_category`
--

LOCK TABLES `item_category` WRITE;
/*!40000 ALTER TABLE `item_category` DISABLE KEYS */;
INSERT INTO `item_category` VALUES ('CA101','Structural Painting'),('CA102','PipeLine'),('CA103','stickering'),('CA104','Cool Coating');
/*!40000 ALTER TABLE `item_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_subcategory`
--

DROP TABLE IF EXISTS `item_subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_subcategory` (
  `subcategory_id` varchar(30) NOT NULL,
  `subcategory_name` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`subcategory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_subcategory`
--

LOCK TABLES `item_subcategory` WRITE;
/*!40000 ALTER TABLE `item_subcategory` DISABLE KEYS */;
INSERT INTO `item_subcategory` VALUES ('SC101','Primer'),('SC102','Top Coat'),('SC103','Pasting'),('SC104','Arrow'),('SC105','Font Sticker');
/*!40000 ALTER TABLE `item_subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` varchar(30) NOT NULL,
  `location_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES ('LO001','Kanchipuram'),('LO002','Erode'),('LO003','Chennai'),('LO004','Chengalpattu'),('LO005','Dindigul'),('LO006','Coimbatore'),('LO007','Pollachi'),('LO008','Perundurai');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_assign`
--

DROP TABLE IF EXISTS `material_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_assign` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pd_id` varchar(30) NOT NULL,
  `site_id` varchar(30) NOT NULL,
  `item_id` varchar(50) NOT NULL,
  `uom_id` int NOT NULL,
  `quantity` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `comp_ratio_a` int DEFAULT NULL,
  `comp_ratio_b` int DEFAULT NULL,
  `comp_ratio_c` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pd_id` (`pd_id`),
  KEY `site_id` (`site_id`),
  KEY `item_id` (`item_id`),
  KEY `uom_id` (`uom_id`),
  CONSTRAINT `material_assign_ibfk_1` FOREIGN KEY (`pd_id`) REFERENCES `project_details` (`pd_id`) ON DELETE RESTRICT,
  CONSTRAINT `material_assign_ibfk_2` FOREIGN KEY (`site_id`) REFERENCES `site_details` (`site_id`) ON DELETE RESTRICT,
  CONSTRAINT `material_assign_ibfk_3` FOREIGN KEY (`item_id`) REFERENCES `material_master` (`item_id`) ON DELETE RESTRICT,
  CONSTRAINT `material_assign_ibfk_4` FOREIGN KEY (`uom_id`) REFERENCES `uom_master` (`uom_id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_assign`
--

LOCK TABLES `material_assign` WRITE;
/*!40000 ALTER TABLE `material_assign` DISABLE KEYS */;
INSERT INTO `material_assign` VALUES (9,'PD001','ST001','item_13',1,60,'2025-08-06 17:48:35',3,2,NULL),(10,'PD001','ST001','item_15',1,75,'2025-08-06 17:48:35',2,1,NULL),(11,'PD001','ST001','item_11',1,150,'2025-08-06 17:48:35',4,3,1),(12,'PD001','ST001','item_12',1,800,'2025-08-06 17:51:09',5,3,NULL),(13,'PD001','ST001','item_103',3,60,'2025-08-06 18:02:36',2,1,NULL),(14,'PD001','ST001','item_12',3,50,'2025-08-07 10:38:05',5,2,NULL),(15,'PD001','ST001','item_15',1,60,'2025-08-07 11:55:47',2,1,NULL),(16,'PD001','ST001','item_13',1,70,'2025-08-07 12:26:42',5,1,NULL),(17,'PD001','ST001','item_104',2,50,'2025-08-07 12:45:08',2,1,NULL),(18,'PD001','ST001','item_12',3,500,'2025-08-07 12:47:11',3,1,NULL),(19,'PD001','ST001','item_101',2,60,'2025-08-07 12:50:19',2,1,NULL),(20,'PD001','ST001','item_13',2,60,'2025-08-07 13:01:10',3,3,NULL);
/*!40000 ALTER TABLE `material_assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_dispatch`
--

DROP TABLE IF EXISTS `material_dispatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_dispatch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `material_assign_id` int NOT NULL,
  `dc_no` int NOT NULL,
  `dispatch_date` date NOT NULL,
  `dispatch_qty` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comp_a_qty` int DEFAULT NULL,
  `comp_b_qty` int DEFAULT NULL,
  `comp_c_qty` int DEFAULT NULL,
  `comp_a_remarks` varchar(255) DEFAULT NULL,
  `comp_b_remarks` varchar(255) DEFAULT NULL,
  `comp_c_remarks` varchar(255) DEFAULT NULL,
  `order_no` varchar(50) DEFAULT NULL,
  `vendor_code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_material_assign_id` (`material_assign_id`),
  CONSTRAINT `fk_material_assign_id` FOREIGN KEY (`material_assign_id`) REFERENCES `material_assign` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_dispatch`
--

LOCK TABLES `material_dispatch` WRITE;
/*!40000 ALTER TABLE `material_dispatch` DISABLE KEYS */;
INSERT INTO `material_dispatch` VALUES (16,9,445,'2025-08-21',NULL,'2025-08-06 12:19:54','2025-08-06 12:19:54',36,24,NULL,'remarks','remarks',NULL,'554844','DC9889'),(17,10,445,'2025-08-21',NULL,'2025-08-06 12:19:54','2025-08-06 12:19:54',50,25,NULL,'remarks','remarks',NULL,'554844','DC9889'),(18,11,445,'2025-08-21',NULL,'2025-08-06 12:19:54','2025-08-06 12:19:54',75,56,19,'remarks','remarks','remarks','554844','DC9889'),(19,12,26,'2025-08-21',NULL,'2025-08-06 12:33:54','2025-08-06 12:33:54',500,300,NULL,'remarks','remarks',NULL,'554844','DS7787'),(20,13,26,'2025-08-21',NULL,'2025-08-06 12:33:54','2025-08-06 12:33:54',40,20,NULL,'remarks','remarks',NULL,'554844','DS7787'),(21,14,4,'2025-08-21',NULL,'2025-08-07 06:23:21','2025-08-07 06:23:21',36,14,NULL,'ujh','mygu7',NULL,'554844','DC9889'),(23,15,4,'2025-08-22',NULL,'2025-08-07 06:55:24','2025-08-07 06:55:24',40,20,NULL,'ew4','edff',NULL,'38373','DS7787'),(24,16,22,'2025-08-15',NULL,'2025-08-07 07:13:20','2025-08-07 07:13:20',58,12,NULL,'gyuhuhuhu','yggyhyhyj',NULL,'38373','DS7787'),(25,17,56,'2025-08-09',NULL,'2025-08-07 07:16:38','2025-08-07 07:16:38',33,17,NULL,'jhby','ybghjj',NULL,'554844','DS7787'),(26,18,22,'2025-08-22',NULL,'2025-08-07 07:18:50','2025-08-07 07:18:50',375,125,NULL,'gregrfenj','bfejrfrf',NULL,'554844','dc8483'),(27,19,83,'2025-08-22',NULL,'2025-08-07 07:30:38','2025-08-07 07:30:38',40,20,NULL,'rferfef','reerferf',NULL,'8595','DS7787'),(28,20,22,'2025-08-15',NULL,'2025-08-07 07:32:35','2025-08-07 07:32:35',30,30,NULL,'hyjgh','ygyj',NULL,'56561','DS7787');
/*!40000 ALTER TABLE `material_dispatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_master`
--

DROP TABLE IF EXISTS `material_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_master` (
  `item_id` varchar(50) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_master`
--

LOCK TABLES `material_master` WRITE;
/*!40000 ALTER TABLE `material_master` DISABLE KEYS */;
INSERT INTO `material_master` VALUES ('item_1','CPS '),('item_10','Sathya Omegakoat 6000 FR Grey'),('item_100','Sathya Fluorocoat 9000'),('item_101','DW CS BC'),('item_102','No.1 sand'),('item_103','DW CS TC Pastel Green '),('item_104','SLF - SG Pastel Green'),('item_105','Sathya SLF - G RAL 7040 Grey'),('item_11','Sathya Omegakoat FR PU Grey'),('item_12','Sathya Omegakoat EPM 6000'),('item_13','SCPL TCPU RAL 5017'),('item_14','SCPL TCPU RAL 1026 yellow'),('item_15','SCPL TCPU RAL 6037'),('item_16','Sathya Nanokoat 2000'),('item_17','TCPU Clear'),('item_18','TCPU Clear'),('item_19','SCPL TCPU Smoke Grey'),('item_2','CPS PU'),('item_20','DTM UHB 6000 Smoke Grey'),('item_21','DTM 6000 UHB - 3K'),('item_22','SCPL TCPU Golden yellow'),('item_23','DTM 1K PU Maroon'),('item_24','Sathya ROZP Brown'),('item_25','Sathya TCPU UVR 750 Dark Green'),('item_26','Sathya TCPU UVR 750 Smoke Grey'),('item_27','Sathya DTM 600 Grey'),('item_28','Sathya TCPU UVR 750 Golden yellow'),('item_29','Sathya TCPU UVR 750 Sea Green'),('item_3','Sathya Duramort EP'),('item_30','Sathya TCPU UVR 750 Sky Blue'),('item_31','Sathya TCPU PO Red'),('item_32','Sathya TCPU UVR 750 Black'),('item_33','Sathya TCPU UVR 750 Signal Red'),('item_34','Sathya TCPU UVR 750 Canary yellow'),('item_35','Sathya TCPU UVR 750 PO Red'),('item_36','Stickers'),('item_37','Sathya ZPP Primer'),('item_38','Acrylic Primer'),('item_39','Sathya HBE Epoxy Light Green'),('item_4','Solvent'),('item_40','Aliphatic TCPU UVR 500 Dark Green'),('item_41','Fluorokoat 9000 - Comp.B'),('item_42','Sathya Reflectkoat white'),('item_43','All Surface Roller'),('item_44','SCC'),('item_45','DW CS Primer'),('item_46','Sand'),('item_47','DW CS TC Smoke Grey'),('item_48','TCPU RAL 7043 Grey'),('item_49','HBPU Int. Silver Grey'),('item_5','Duracrete PU Pearl Grey'),('item_50','HBPU Ext. Silver Grey'),('item_51','AFC Topcot Crimson'),('item_52','Rainguard PRO - Morning Glory'),('item_53','Sathya Line Marking Golden yellow'),('item_54','SCPL TCPU UVR 500 Golden yellow'),('item_55','Sathya SF ZPP Grey'),('item_56','SCPL TCPU RAL 2003 Orange'),('item_57','SCPL TCPU UVR 500 Black'),('item_58','Sathya DTM 1K PU Dark Grey'),('item_59','Sathya DTM Red'),('item_6','Duracrete PU Pearl Grey'),('item_60','Sathya TCPU DA Grey'),('item_61','H.B.C.1000 White'),('item_62','Sathya DTM 2K PU Light Green'),('item_63','Sathya TCPU UVR 500 Grey'),('item_64','CLEANING SOLVENT'),('item_65','Sathya HBE Epoxy Line Marking Golden yellow'),('item_66','Sathya SF HBE Epoxy Pearl Grey'),('item_67','Sathya SF PU Prime'),('item_68','Sathya HYC PU LIGHT BLUE'),('item_69','Roller'),('item_7','SCPL TCPU Pink'),('item_70','Tray'),('item_71','Putty Blade 4'),('item_72','Sheet'),('item_73','Interior Royale Roller'),('item_74','Sathya HYC PU Beige'),('item_75','9\" Roller'),('item_76','2\" Brush'),('item_77','Empty Plastic pail'),('item_78','Sathya HB PU RAL 7002 Olive Grey'),('item_79','Sathya SLS Screed'),('item_8','SCPL TCPU Blue RAL 5015'),('item_80','Sathya HB PU RAL 7031 Grey'),('item_81','Sathya HB PU RAL 7035 Grey'),('item_82','SCPL TCPU Red'),('item_83','SCPL TCPU Sky Blue'),('item_84','Sathya SLF - SG Pearl Grey'),('item_85','Sathya SLF - SG Pearl Grey'),('item_86','Sathya SLF - G Pearl Grey'),('item_87','Sathya SLF PU 2K P.Green'),('item_88','Sathya SLF PU 2K French Blue'),('item_89','ESDEE Coat PU Paint'),('item_9','Sathya Omegakoat 6000 Grey'),('item_90','Vertical Fall Arrest Equipment'),('item_91','SCPL ZPP Grey'),('item_92','Durakoat TCPU Oxford Blue'),('item_93','SCPL TCPU Ivory'),('item_94','Durakoat TCPU Opaline Green'),('item_95','GREENSOL 9000'),('item_96','CRE FR - Nile Blue'),('item_97','Sathya Technobond FR EP Grey'),('item_98','Sathya Technobond FR PU'),('item_99','SCPL TCPU Silver Grey');
/*!40000 ALTER TABLE `material_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petty_cash`
--

DROP TABLE IF EXISTS `petty_cash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `petty_cash` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pd_id` varchar(30) NOT NULL,
  `site_id` varchar(30) NOT NULL,
  `assign_date` date NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `previous_remaining_amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pd_id` (`pd_id`),
  KEY `site_id` (`site_id`),
  CONSTRAINT `petty_cash_ibfk_1` FOREIGN KEY (`pd_id`) REFERENCES `project_details` (`pd_id`),
  CONSTRAINT `petty_cash_ibfk_2` FOREIGN KEY (`site_id`) REFERENCES `site_details` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petty_cash`
--

LOCK TABLES `petty_cash` WRITE;
/*!40000 ALTER TABLE `petty_cash` DISABLE KEYS */;
INSERT INTO `petty_cash` VALUES (5,'PD001','ST001','2025-05-31',2020.00,'2025-07-31 11:54:51',NULL,NULL),(6,'PD001','ST001','2025-06-01',1240.00,'2025-07-31 11:57:17',NULL,NULL);
/*!40000 ALTER TABLE `petty_cash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pipeline`
--

DROP TABLE IF EXISTS `pipeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pipeline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `report_type_id` int NOT NULL,
  `primer` decimal(10,2) DEFAULT NULL,
  `primer_rate` decimal(10,2) DEFAULT NULL,
  `primer_value` decimal(10,2) DEFAULT NULL,
  `total_rate` decimal(10,2) DEFAULT NULL,
  `total_value` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_report_type` (`report_id`,`report_type_id`),
  KEY `report_type_id` (`report_type_id`),
  CONSTRAINT `pipeline_ibfk_1` FOREIGN KEY (`report_id`) REFERENCES `report_master` (`report_id`) ON DELETE CASCADE,
  CONSTRAINT `pipeline_ibfk_2` FOREIGN KEY (`report_type_id`) REFERENCES `report_type` (`type_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pipeline`
--

LOCK TABLES `pipeline` WRITE;
/*!40000 ALTER TABLE `pipeline` DISABLE KEYS */;
INSERT INTO `pipeline` VALUES (1,1,1,NULL,NULL,NULL,NULL,NULL),(2,1,2,NULL,NULL,NULL,NULL,NULL),(3,1,3,NULL,NULL,NULL,NULL,NULL),(4,2,1,NULL,NULL,NULL,NULL,NULL),(5,2,2,NULL,NULL,NULL,NULL,NULL),(6,2,3,NULL,NULL,NULL,NULL,NULL),(7,3,1,NULL,NULL,NULL,NULL,NULL),(8,3,2,NULL,NULL,NULL,NULL,NULL),(9,3,3,NULL,NULL,NULL,NULL,NULL),(10,4,1,NULL,NULL,NULL,NULL,NULL),(11,4,2,NULL,NULL,NULL,NULL,NULL),(12,4,3,NULL,NULL,NULL,NULL,NULL),(13,5,1,NULL,NULL,NULL,NULL,NULL),(14,5,2,NULL,NULL,NULL,NULL,NULL),(15,5,3,NULL,NULL,NULL,NULL,NULL),(16,6,1,NULL,NULL,NULL,NULL,NULL),(17,6,2,NULL,NULL,NULL,NULL,NULL),(18,6,3,NULL,NULL,NULL,NULL,NULL),(19,7,1,NULL,NULL,NULL,NULL,NULL),(20,7,2,NULL,NULL,NULL,NULL,NULL),(21,7,3,NULL,NULL,NULL,NULL,NULL),(22,8,1,NULL,NULL,NULL,NULL,NULL),(23,8,2,NULL,NULL,NULL,NULL,NULL),(24,8,3,NULL,NULL,NULL,NULL,NULL),(25,9,1,NULL,NULL,NULL,NULL,NULL),(26,9,2,NULL,NULL,NULL,NULL,NULL),(27,9,3,NULL,NULL,NULL,NULL,NULL),(28,10,1,NULL,NULL,NULL,NULL,NULL),(29,10,2,NULL,NULL,NULL,NULL,NULL),(30,10,3,NULL,NULL,NULL,NULL,NULL),(31,11,1,NULL,NULL,NULL,NULL,NULL),(32,11,2,NULL,NULL,NULL,NULL,NULL),(33,11,3,NULL,NULL,NULL,NULL,NULL),(34,12,1,NULL,NULL,NULL,NULL,NULL),(35,12,2,NULL,NULL,NULL,NULL,NULL),(36,12,3,NULL,NULL,NULL,NULL,NULL),(37,13,1,NULL,NULL,NULL,NULL,NULL),(38,13,2,NULL,NULL,NULL,NULL,NULL),(39,13,3,NULL,NULL,NULL,NULL,NULL),(40,14,1,NULL,NULL,NULL,NULL,NULL),(41,14,2,NULL,NULL,NULL,NULL,NULL),(42,14,3,NULL,NULL,NULL,NULL,NULL),(43,15,1,NULL,NULL,NULL,NULL,NULL),(44,15,2,NULL,NULL,NULL,NULL,NULL),(45,15,3,NULL,NULL,NULL,NULL,NULL),(46,16,1,NULL,NULL,NULL,NULL,NULL),(47,16,2,NULL,NULL,NULL,NULL,NULL),(48,16,3,NULL,NULL,NULL,NULL,NULL),(49,17,1,NULL,NULL,NULL,NULL,NULL),(50,17,2,NULL,NULL,NULL,NULL,NULL),(51,17,3,NULL,NULL,NULL,NULL,NULL),(52,18,1,NULL,NULL,NULL,NULL,NULL),(53,18,2,NULL,NULL,NULL,NULL,NULL),(54,18,3,NULL,NULL,NULL,NULL,NULL),(55,19,1,NULL,NULL,NULL,NULL,NULL),(56,19,2,NULL,NULL,NULL,NULL,NULL),(57,19,3,NULL,NULL,NULL,NULL,NULL),(58,20,1,NULL,NULL,NULL,NULL,NULL),(59,20,2,NULL,NULL,NULL,NULL,NULL),(60,20,3,NULL,NULL,NULL,NULL,NULL),(61,21,1,NULL,NULL,NULL,NULL,NULL),(62,21,2,NULL,NULL,NULL,NULL,NULL),(63,21,3,NULL,NULL,NULL,NULL,NULL),(64,22,1,NULL,NULL,NULL,NULL,NULL),(65,22,2,NULL,NULL,NULL,NULL,NULL),(66,22,3,NULL,NULL,NULL,NULL,NULL),(67,23,1,NULL,NULL,NULL,NULL,NULL),(68,23,2,NULL,NULL,NULL,NULL,NULL),(69,23,3,NULL,NULL,NULL,NULL,NULL),(70,24,1,NULL,NULL,NULL,NULL,NULL),(71,24,2,NULL,NULL,NULL,NULL,NULL),(72,24,3,NULL,NULL,NULL,NULL,NULL),(73,25,1,NULL,NULL,NULL,NULL,NULL),(74,25,2,NULL,NULL,NULL,NULL,NULL),(75,25,3,NULL,NULL,NULL,NULL,NULL),(76,26,1,NULL,NULL,NULL,NULL,NULL),(77,26,2,NULL,NULL,NULL,NULL,NULL),(78,26,3,NULL,NULL,NULL,NULL,NULL),(79,27,1,NULL,NULL,NULL,NULL,NULL),(80,27,2,NULL,NULL,NULL,NULL,NULL),(81,27,3,NULL,NULL,NULL,NULL,NULL),(82,28,1,NULL,NULL,NULL,NULL,NULL),(83,28,2,NULL,NULL,NULL,NULL,NULL),(84,28,3,NULL,NULL,NULL,NULL,NULL),(85,29,1,NULL,NULL,NULL,NULL,NULL),(86,29,2,NULL,NULL,NULL,NULL,NULL),(87,29,3,NULL,NULL,NULL,NULL,NULL),(88,30,1,NULL,NULL,NULL,NULL,NULL),(89,30,2,NULL,NULL,NULL,NULL,NULL),(90,30,3,NULL,NULL,NULL,NULL,NULL),(91,31,1,NULL,NULL,NULL,NULL,NULL),(92,31,2,NULL,NULL,NULL,NULL,NULL),(93,31,3,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `pipeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `po_reckoner`
--

DROP TABLE IF EXISTS `po_reckoner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `po_reckoner` (
  `rec_id` int NOT NULL AUTO_INCREMENT,
  `category_id` varchar(30) DEFAULT NULL,
  `subcategory_id` varchar(30) DEFAULT NULL,
  `po_quantity` int DEFAULT NULL,
  `uom` varchar(10) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `value` float DEFAULT NULL,
  `site_id` varchar(30) DEFAULT NULL,
  `desc_id` varchar(10) DEFAULT NULL,
  `item_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rec_id`),
  KEY `fk_category` (`category_id`),
  KEY `fk_subcategory` (`subcategory_id`),
  KEY `fk_po_reckoner_site` (`site_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `item_category` (`category_id`),
  CONSTRAINT `fk_po_reckoner_site` FOREIGN KEY (`site_id`) REFERENCES `site_details` (`site_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `item_subcategory` (`subcategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `po_reckoner`
--

LOCK TABLES `po_reckoner` WRITE;
/*!40000 ALTER TABLE `po_reckoner` DISABLE KEYS */;
INSERT INTO `po_reckoner` VALUES (1,'CA101','SC101',800,'Sqm',271.6,217280,'ST001','4','120'),(2,'CA101','SC101',1000,'Sqm',271.6,271600,'ST001','4','10'),(3,'CA102','SC101',465,'Sqm',441,205065,'ST001','5','130'),(4,'CA102','SC101',118,'Sqm',421.4,49725.2,'ST001','6','140'),(5,'CA102','SC101',50,'Sqm',421.4,21070,'ST001','7','150'),(6,'CA102','SC101',302,'Sqm',441,133182,'ST001','8','160'),(7,'CA102','SC101',157,'Sqm',421.4,66159.8,'ST001','9','170'),(8,'CA102','SC101',100,'Sqm',441,44100,'ST001','5','20'),(9,'CA103','SC103',60,'Nos',174.6,10476,'ST001','1','10'),(10,'CA103','SC103',60,'Nos',174.6,10476,'ST001','12','20'),(11,'CA103','SC103',60,'Nos',232.8,13968,'ST001','23','30'),(12,'CA103','SC103',50,'Nos',232.8,11640,'ST001','34','40'),(13,'CA103','SC103',30,'Nos',116.4,3492,'ST001','45','50'),(14,'CA103','SC103',90,'Nos',116.4,10476,'ST001','56','60'),(15,'CA103','SC103',160,'Nos',116.4,18624,'ST001','65','70'),(16,'CA103','SC103',35,'Nos',116.4,4074,'ST001','66','80'),(17,'CA103','SC103',735,'Nos',232.8,171108,'ST001','67','90'),(18,'CA103','SC103',300,'Nos',232.8,69840,'ST001','2','100'),(19,'CA103','SC103',525,'Nos',232.8,122220,'ST001','3','110');
/*!40000 ALTER TABLE `po_reckoner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_details`
--

DROP TABLE IF EXISTS `project_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_details` (
  `pd_id` varchar(30) NOT NULL,
  `company_id` varchar(30) DEFAULT NULL,
  `project_type_id` varchar(30) DEFAULT NULL,
  `project_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pd_id`),
  KEY `fk_company_details` (`company_id`),
  KEY `fk_project_type` (`project_type_id`),
  CONSTRAINT `fk_company_details` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `fk_project_type` FOREIGN KEY (`project_type_id`) REFERENCES `project_type` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_details`
--

LOCK TABLES `project_details` WRITE;
/*!40000 ALTER TABLE `project_details` DISABLE KEYS */;
INSERT INTO `project_details` VALUES ('PD001','CO001','PT001','CSL Berigai'),('PD002','CO002','PT001','Elite Heights Residential Painting Project'),('PD003','CO002','PT001','BKS Textiles');
/*!40000 ALTER TABLE `project_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_type`
--

DROP TABLE IF EXISTS `project_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_type` (
  `type_id` varchar(30) NOT NULL,
  `type_description` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_type`
--

LOCK TABLES `project_type` WRITE;
/*!40000 ALTER TABLE `project_type` DISABLE KEYS */;
INSERT INTO `project_type` VALUES ('PT001','service'),('PT002','supply');
/*!40000 ALTER TABLE `project_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider_master`
--

DROP TABLE IF EXISTS `provider_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `transport_type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transport_type_id` (`transport_type_id`),
  CONSTRAINT `provider_master_ibfk_1` FOREIGN KEY (`transport_type_id`) REFERENCES `transport_type` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider_master`
--

LOCK TABLES `provider_master` WRITE;
/*!40000 ALTER TABLE `provider_master` DISABLE KEYS */;
INSERT INTO `provider_master` VALUES (1,'ABC parcel service','chennai','94839483',2),(2,'karthi','chennai','94838283',1),(3,'sankar',NULL,NULL,1),(5,'guna','gandhhipuram','9958475945',4),(6,'guru','example address','9483847384',1),(7,'xyz parcel service limited','example address','9484838483',2),(8,'lmw parcel service','PN palayam','9859493943',2);
/*!40000 ALTER TABLE `provider_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reckoner_types`
--

DROP TABLE IF EXISTS `reckoner_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reckoner_types` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(50) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reckoner_types`
--

LOCK TABLES `reckoner_types` WRITE;
/*!40000 ALTER TABLE `reckoner_types` DISABLE KEYS */;
INSERT INTO `reckoner_types` VALUES (1,'Sample'),(2,'Approved'),(3,'Not Approved');
/*!40000 ALTER TABLE `reckoner_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_master`
--

DROP TABLE IF EXISTS `report_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report_master` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `site_id` varchar(30) NOT NULL,
  PRIMARY KEY (`report_id`),
  KEY `site_id` (`site_id`),
  CONSTRAINT `report_master_ibfk_1` FOREIGN KEY (`site_id`) REFERENCES `site_details` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_master`
--

LOCK TABLES `report_master` WRITE;
/*!40000 ALTER TABLE `report_master` DISABLE KEYS */;
INSERT INTO `report_master` VALUES (1,'2025-03-01','ST001'),(2,'2025-03-02','ST001'),(3,'2025-03-03','ST001'),(4,'2025-03-04','ST001'),(5,'2025-03-05','ST001'),(6,'2025-03-06','ST001'),(7,'2025-03-07','ST001'),(8,'2025-03-08','ST001'),(9,'2025-03-09','ST001'),(10,'2025-03-10','ST001'),(11,'2025-03-11','ST001'),(12,'2025-03-12','ST001'),(13,'2025-03-13','ST001'),(14,'2025-03-14','ST001'),(15,'2025-03-15','ST001'),(16,'2025-03-16','ST001'),(17,'2025-03-17','ST001'),(18,'2025-03-18','ST001'),(19,'2025-03-19','ST001'),(20,'2025-03-20','ST001'),(21,'2025-03-21','ST001'),(22,'2025-03-22','ST001'),(23,'2025-03-23','ST001'),(24,'2025-03-24','ST001'),(25,'2025-03-25','ST001'),(26,'2025-03-26','ST001'),(27,'2025-03-27','ST001'),(28,'2025-03-28','ST001'),(29,'2025-03-29','ST001'),(30,'2025-03-30','ST001'),(31,'2025-03-31','ST001');
/*!40000 ALTER TABLE `report_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_type`
--

DROP TABLE IF EXISTS `report_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_type`
--

LOCK TABLES `report_type` WRITE;
/*!40000 ALTER TABLE `report_type` DISABLE KEYS */;
INSERT INTO `report_type` VALUES (1,'SPR'),(2,'MDR'),(3,'MUR');
/*!40000 ALTER TABLE `report_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'superadmin'),(2,'admin'),(3,'site incharge'),(4,'accounts_team');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_details`
--

DROP TABLE IF EXISTS `site_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_details` (
  `site_id` varchar(30) NOT NULL,
  `site_name` varchar(100) DEFAULT NULL,
  `po_number` varchar(70) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `incharge_id` varchar(30) DEFAULT NULL,
  `workforce_id` varchar(30) DEFAULT NULL,
  `pd_id` varchar(30) NOT NULL,
  `location_id` varchar(10) DEFAULT NULL,
  `reckoner_type_id` int DEFAULT NULL,
  PRIMARY KEY (`site_id`),
  KEY `fk_incharge_type` (`incharge_id`),
  KEY `fk_workforce_type` (`workforce_id`),
  KEY `fk_pd_id` (`pd_id`),
  KEY `fk_site_details_location` (`location_id`),
  KEY `fk_reckoner_type_id` (`reckoner_type_id`),
  CONSTRAINT `fk_incharge_type` FOREIGN KEY (`incharge_id`) REFERENCES `site_incharge` (`incharge_id`),
  CONSTRAINT `fk_pd_id` FOREIGN KEY (`pd_id`) REFERENCES `project_details` (`pd_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reckoner_type_id` FOREIGN KEY (`reckoner_type_id`) REFERENCES `reckoner_types` (`type_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_site_details_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  CONSTRAINT `fk_workforce_type` FOREIGN KEY (`workforce_id`) REFERENCES `workforce_type` (`workforce_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_details`
--

LOCK TABLES `site_details` WRITE;
/*!40000 ALTER TABLE `site_details` DISABLE KEYS */;
INSERT INTO `site_details` VALUES ('ST001','CSL Berigai-block A','PO 6900002908','2025-03-01','2025-03-31','SI003',NULL,'PD001','LO006',NULL),('ST002','Perundurai ','PO 83927848294','2025-07-01','2025-07-28','SI003',NULL,'PD003','LO008',2);
/*!40000 ALTER TABLE `site_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_incharge`
--

DROP TABLE IF EXISTS `site_incharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_incharge` (
  `incharge_id` varchar(30) NOT NULL,
  `incharge_type` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`incharge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_incharge`
--

LOCK TABLES `site_incharge` WRITE;
/*!40000 ALTER TABLE `site_incharge` DISABLE KEYS */;
INSERT INTO `site_incharge` VALUES ('SI001','supervisor'),('SI002','site engineer'),('SI003','supervisor + site engineer');
/*!40000 ALTER TABLE `site_incharge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `siteincharge_assign`
--

DROP TABLE IF EXISTS `siteincharge_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `siteincharge_assign` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pd_id` varchar(30) NOT NULL,
  `site_id` varchar(30) NOT NULL,
  `emp_id` varchar(30) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pd_id` (`pd_id`),
  KEY `site_id` (`site_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `siteincharge_assign_ibfk_1` FOREIGN KEY (`pd_id`) REFERENCES `project_details` (`pd_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `siteincharge_assign_ibfk_2` FOREIGN KEY (`site_id`) REFERENCES `site_details` (`site_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `siteincharge_assign_ibfk_3` FOREIGN KEY (`emp_id`) REFERENCES `employee_master` (`emp_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `siteincharge_assign`
--

LOCK TABLES `siteincharge_assign` WRITE;
/*!40000 ALTER TABLE `siteincharge_assign` DISABLE KEYS */;
INSERT INTO `siteincharge_assign` VALUES (1,'PD001','ST001','EMP001','2025-08-01','2025-08-08'),(2,'PD003','ST002','EMP001','2025-08-11','2025-08-15');
/*!40000 ALTER TABLE `siteincharge_assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `siteincharge_exp_entry`
--

DROP TABLE IF EXISTS `siteincharge_exp_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `siteincharge_exp_entry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `petty_cash_id` int NOT NULL,
  `expense_category_id` int DEFAULT NULL,
  `expense_detail_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `amount_created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `petty_cash_id` (`petty_cash_id`),
  KEY `expense_category_id` (`expense_category_id`),
  KEY `expense_detail_id` (`expense_detail_id`),
  CONSTRAINT `siteincharge_exp_entry_ibfk_1` FOREIGN KEY (`petty_cash_id`) REFERENCES `petty_cash` (`id`),
  CONSTRAINT `siteincharge_exp_entry_ibfk_2` FOREIGN KEY (`expense_category_id`) REFERENCES `expense_category` (`id`),
  CONSTRAINT `siteincharge_exp_entry_ibfk_3` FOREIGN KEY (`expense_detail_id`) REFERENCES `expense_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `siteincharge_exp_entry`
--

LOCK TABLES `siteincharge_exp_entry` WRITE;
/*!40000 ALTER TABLE `siteincharge_exp_entry` DISABLE KEYS */;
INSERT INTO `siteincharge_exp_entry` VALUES (13,5,4,4,720.00,'2025-07-31 11:55:28'),(14,5,6,3,100.00,'2025-07-31 11:55:50'),(15,5,4,5,1200.00,'2025-07-31 11:56:24'),(16,6,6,3,100.00,'2025-07-31 11:57:44'),(17,6,4,6,830.00,'2025-07-31 12:04:50'),(18,6,4,7,310.00,'2025-07-31 12:05:14');
/*!40000 ALTER TABLE `siteincharge_exp_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stickering`
--

DROP TABLE IF EXISTS `stickering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stickering` (
  `id` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `report_type_id` int NOT NULL,
  `pasting` decimal(10,2) DEFAULT NULL,
  `pasting_rate` decimal(10,2) DEFAULT NULL,
  `pasting_value` decimal(10,2) DEFAULT NULL,
  `total_rate` decimal(10,2) DEFAULT NULL,
  `total_value` decimal(10,2) DEFAULT NULL,
  `font_sticker` decimal(10,2) DEFAULT NULL,
  `font_sticker_rate` decimal(10,2) DEFAULT NULL,
  `font_sticker_value` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_report_type` (`report_id`,`report_type_id`),
  KEY `report_type_id` (`report_type_id`),
  CONSTRAINT `stickering_ibfk_1` FOREIGN KEY (`report_id`) REFERENCES `report_master` (`report_id`) ON DELETE CASCADE,
  CONSTRAINT `stickering_ibfk_2` FOREIGN KEY (`report_type_id`) REFERENCES `report_type` (`type_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stickering`
--

LOCK TABLES `stickering` WRITE;
/*!40000 ALTER TABLE `stickering` DISABLE KEYS */;
INSERT INTO `stickering` VALUES (1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,1,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,2,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,2,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,2,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,3,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,3,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,3,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,4,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,4,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,4,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,5,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,5,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,5,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,6,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,6,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,6,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,7,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,7,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,7,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,8,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,8,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,8,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,9,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,9,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,9,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,10,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,10,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,10,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,11,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,11,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,11,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,12,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,12,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(36,12,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(37,13,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,13,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,13,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,14,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,14,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,14,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,15,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,15,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,15,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,16,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,16,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,16,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(49,17,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,17,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,17,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,18,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,18,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,18,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,19,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,19,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,19,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,20,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(59,20,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(60,20,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(61,21,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(62,21,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(63,21,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(64,22,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(65,22,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(66,22,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(67,23,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(68,23,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(69,23,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,24,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,24,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(72,24,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(73,25,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,25,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(75,25,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,26,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(77,26,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(78,26,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(79,27,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(80,27,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(81,27,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(82,28,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(83,28,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(84,28,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(85,29,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(86,29,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(87,29,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(88,30,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(89,30,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(90,30,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(91,31,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(92,31,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,31,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `stickering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `structural_painting`
--

DROP TABLE IF EXISTS `structural_painting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `structural_painting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `report_type_id` int NOT NULL,
  `primer` decimal(10,2) DEFAULT NULL,
  `primer_rate` decimal(10,2) DEFAULT NULL,
  `primer_value` decimal(10,2) DEFAULT NULL,
  `total_rate` decimal(10,2) DEFAULT NULL,
  `total_value` decimal(10,2) DEFAULT NULL,
  `top_coat` decimal(10,2) DEFAULT NULL,
  `top_coat_rate` decimal(10,2) DEFAULT NULL,
  `top_coat_value` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_report_type` (`report_id`,`report_type_id`),
  KEY `report_type_id` (`report_type_id`),
  CONSTRAINT `structural_painting_ibfk_1` FOREIGN KEY (`report_id`) REFERENCES `report_master` (`report_id`) ON DELETE CASCADE,
  CONSTRAINT `structural_painting_ibfk_2` FOREIGN KEY (`report_type_id`) REFERENCES `report_type` (`type_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `structural_painting`
--

LOCK TABLES `structural_painting` WRITE;
/*!40000 ALTER TABLE `structural_painting` DISABLE KEYS */;
INSERT INTO `structural_painting` VALUES (1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,1,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,2,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,2,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,2,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,3,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,3,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,3,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,4,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,4,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,4,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,5,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,5,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,5,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,6,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,6,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,6,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,7,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,7,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,7,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,8,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,8,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,8,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,9,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,9,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,9,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,10,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,10,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,10,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,11,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,11,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,11,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,12,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,12,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(36,12,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(37,13,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,13,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,13,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,14,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(41,14,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,14,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,15,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,15,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,15,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,16,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,16,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,16,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(49,17,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(50,17,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,17,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,18,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,18,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,18,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,19,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(56,19,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,19,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(58,20,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(59,20,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(60,20,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(61,21,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(62,21,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(63,21,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(64,22,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(65,22,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(66,22,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(67,23,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(68,23,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(69,23,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(70,24,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,24,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(72,24,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(73,25,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,25,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(75,25,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,26,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(77,26,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(78,26,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(79,27,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(80,27,2,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL),(81,27,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(82,28,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(83,28,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(84,28,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(85,29,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(86,29,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(87,29,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(88,30,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(89,30,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(90,30,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(91,31,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(92,31,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,31,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `structural_painting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transport_master`
--

DROP TABLE IF EXISTS `transport_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transport_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider_id` int DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `driver_id` int DEFAULT NULL,
  `booking_expense` decimal(10,2) DEFAULT NULL,
  `travel_expense` decimal(10,2) DEFAULT NULL,
  `dispatch_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `provider_id` (`provider_id`),
  KEY `vehicle_id` (`vehicle_id`),
  KEY `driver_id` (`driver_id`),
  KEY `dispatch_id` (`dispatch_id`),
  CONSTRAINT `transport_master_ibfk_1` FOREIGN KEY (`provider_id`) REFERENCES `provider_master` (`id`) ON DELETE SET NULL,
  CONSTRAINT `transport_master_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_master` (`id`) ON DELETE SET NULL,
  CONSTRAINT `transport_master_ibfk_3` FOREIGN KEY (`driver_id`) REFERENCES `driver_master` (`id`) ON DELETE SET NULL,
  CONSTRAINT `transport_master_ibfk_4` FOREIGN KEY (`dispatch_id`) REFERENCES `material_dispatch` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transport_master`
--

LOCK TABLES `transport_master` WRITE;
/*!40000 ALTER TABLE `transport_master` DISABLE KEYS */;
INSERT INTO `transport_master` VALUES (9,2,'coimbatore',1,1,NULL,8000.00,16,'2025-08-06 17:49:54'),(10,2,'coimbatore',1,1,NULL,8000.00,17,'2025-08-06 17:49:54'),(11,2,'coimbatore',1,1,NULL,8000.00,18,'2025-08-06 17:49:54'),(12,2,'coimbatore',1,1,5000.00,8000.00,19,'2025-08-06 18:03:54'),(13,2,'coimbatore',1,1,5000.00,8000.00,20,'2025-08-06 18:03:54'),(14,3,'coimbatore',1,1,5000.00,6000.00,21,'2025-08-07 11:53:21'),(15,5,'chennai',3,3,NULL,10000.00,23,'2025-08-07 12:25:24'),(16,2,'chennai',3,1,NULL,7999.99,24,'2025-08-07 12:43:20'),(17,6,'coimbatore',4,4,NULL,50000.00,25,'2025-08-07 12:46:38'),(18,7,'coimbatore',5,5,3000.00,5000.00,26,'2025-08-07 12:48:50'),(19,3,'coimbatore',6,1,NULL,6000.00,27,'2025-08-07 13:00:38'),(20,8,'coimbatore',1,6,5000.00,7999.99,28,'2025-08-07 13:02:35');
/*!40000 ALTER TABLE `transport_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transport_type`
--

DROP TABLE IF EXISTS `transport_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transport_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transport_type`
--

LOCK TABLES `transport_type` WRITE;
/*!40000 ALTER TABLE `transport_type` DISABLE KEYS */;
INSERT INTO `transport_type` VALUES (1,'Own Vehicle'),(2,'Rental Vehicle');
/*!40000 ALTER TABLE `transport_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uom_master`
--

DROP TABLE IF EXISTS `uom_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uom_master` (
  `uom_id` int NOT NULL AUTO_INCREMENT,
  `uom_name` varchar(10) NOT NULL,
  PRIMARY KEY (`uom_id`),
  UNIQUE KEY `uom_name` (`uom_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uom_master`
--

LOCK TABLES `uom_master` WRITE;
/*!40000 ALTER TABLE `uom_master` DISABLE KEYS */;
INSERT INTO `uom_master` VALUES (2,'KGS'),(1,'LIT'),(3,'ML'),(5,'NOS'),(4,'SET');
/*!40000 ALTER TABLE `uom_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'superadmin','superadmin@gmail.com','12345678',1,'2025-07-18 04:46:28'),(2,'admin','admin@gmail.com','12345678',2,'2025-07-18 04:46:28'),(3,'siteincharge','siteincharge@gmail.com','12345678',3,'2025-07-18 04:46:28'),(4,'accountant','accountant@gmail.com','12345678',4,'2025-07-18 04:46:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_master`
--

DROP TABLE IF EXISTS `vehicle_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_model` varchar(255) DEFAULT NULL,
  `vehicle_number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_master`
--

LOCK TABLES `vehicle_master` WRITE;
/*!40000 ALTER TABLE `vehicle_master` DISABLE KEYS */;
INSERT INTO `vehicle_master` VALUES (1,'tempo','2s1','Tn-39-2394'),(3,'mini truck','se145','TN -483 -39394'),(4,'auto','new model','tn04923'),(5,'honda','s21','tn-388283'),(6,'car','car','tn-04 -4343');
/*!40000 ALTER TABLE `vehicle_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_descriptions`
--

DROP TABLE IF EXISTS `work_descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_descriptions` (
  `desc_id` int NOT NULL AUTO_INCREMENT,
  `desc_name` varchar(100) NOT NULL,
  PRIMARY KEY (`desc_id`),
  UNIQUE KEY `desc_name` (`desc_name`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_descriptions`
--

LOCK TABLES `work_descriptions` WRITE;
/*!40000 ALTER TABLE `work_descriptions` DISABLE KEYS */;
INSERT INTO `work_descriptions` VALUES (47,'1.5\" line arrow supply and pasting'),(57,'1.5\" line font stickering work'),(46,'1\" line arrow supply and pasting'),(55,'1\" line font stickering work'),(53,'10\" line arrow supply and pasting'),(63,'10\" line font stickering work'),(54,'12\" line arrow supply and pasting'),(64,'12\" line font stickering work'),(48,'2\" line arrow supply and pasting'),(58,'2\" line font stickering work'),(49,'3\" line arrow supply and pasting'),(59,'3\" line font stickering work'),(50,'4\" line arrow supply and pasting'),(60,'4\" line font stickering work'),(51,'6\" line arrow supply and pasting'),(61,'6\" line font stickering work'),(52,'8\" line arrow supply and pasting'),(62,'8\" line font stickering work'),(11,'Air line 1 coat blue'),(33,'Chilled brine band supply and pasting'),(19,'Chilled brine line painting'),(32,'Chilled water band supply and pasting'),(18,'Chilled water line painting'),(31,'Cooling water band supply and pasting'),(13,'Cooling water line 1 coat dark green'),(17,'Cooling water line painting'),(38,'Eye wash shower band supply and pasting'),(24,'Eye wash shower line'),(44,'HSD band supply and pasting'),(30,'HSD line painting work'),(40,'Instrument air band supply and pasting'),(26,'Instrument air line'),(42,'LP Steam band supply and pasting'),(28,'LP Steam line painting work'),(43,'MP Steam band supply and pasting'),(29,'MP Steam line painting'),(5,'Nitrogen 2 coat redoxide + Canary Yellow'),(35,'Nitrogen band supply and pasting'),(20,'Nitrogen line painting'),(9,'Plant Air 2 coat redoxide + sky blue'),(41,'Plant air band supply and pasting'),(27,'Plant air line painting'),(16,'Primer coating with supply'),(36,'Process water band supply and pasting'),(21,'Process water line painting work'),(37,'PSV band supply and pasting'),(22,'PSV line painting'),(7,'PSV quench 2 coat redoxide + black'),(6,'Raw water 2 coat redoxide + sea green'),(39,'Raw water band supply and pasting'),(25,'Raw water line'),(14,'Raw water line 1 coat sea green'),(12,'Sticker for cooling water return'),(1,'Sticker for cooling water supply'),(34,'Sticker for Eye wash'),(45,'Sticker for High speed diesel'),(3,'Sticker for Holding Tank'),(66,'Sticker for LEV Scrubber'),(2,'Sticker for Non Peso Tank'),(67,'Sticker for Peso Tank'),(23,'Sticker for process water'),(65,'Sticker for scrubber'),(56,'Sticker for Vacuum'),(15,'Structural line painting'),(10,'Structural paint incl cleaner 2 coat paint'),(4,'Structural Painting Work'),(8,'Vacuum White');
/*!40000 ALTER TABLE `work_descriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workforce_type`
--

DROP TABLE IF EXISTS `workforce_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workforce_type` (
  `workforce_id` varchar(30) NOT NULL,
  `workforce_type` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`workforce_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workforce_type`
--

LOCK TABLES `workforce_type` WRITE;
/*!40000 ALTER TABLE `workforce_type` DISABLE KEYS */;
INSERT INTO `workforce_type` VALUES ('WF001','contract'),('WF002','labour'),('WF003','contract + labour');
/*!40000 ALTER TABLE `workforce_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-11 10:25:59
