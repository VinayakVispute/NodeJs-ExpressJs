// console.log(window);
console.log(document);

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add display report',7,'add_displayreport'),(26,'Can change display report',7,'change_displayreport'),(27,'Can delete display report',7,'delete_displayreport'),(28,'Can view display report',7,'view_displayreport'),(29,'Can add display report',8,'add_displayreport'),(30,'Can change display report',8,'change_displayreport'),(31,'Can delete display report',8,'delete_displayreport'),(32,'Can view display report',8,'view_displayreport'),(33,'Can add state wise police station',9,'add_statewisepolicestation'),(34,'Can change state wise police station',9,'change_statewisepolicestation'),(35,'Can delete state wise police station',9,'delete_statewisepolicestation'),(36,'Can view state wise police station',9,'view_statewisepolicestation');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$390000$PuOj9BjwaZ1bndjc7aXc8M$JJNGWx20qU0kH9aoXuNWldE6B9Ulg5tSatVV94s+Ksw=','2022-12-25 07:52:22.306030',1,'admin','','','vinayakvispute4@gmail.com',1,1,'2022-12-09 10:28:27.687574');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `databasereport_displayreport`
--

DROP TABLE IF EXISTS `databasereport_displayreport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `databasereport_displayreport` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `police_station` varchar(50) NOT NULL,
  `how_come` varchar(50) NOT NULL,
  `time_taken` varchar(50) NOT NULL,
  `number` varchar(50) NOT NULL,
  `feedback` longtext NOT NULL,
  `rating` smallint unsigned NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `databasereport_displayreport_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `databasereport_displayreport`
--

LOCK TABLES `databasereport_displayreport` WRITE;
/*!40000 ALTER TABLE `databasereport_displayreport` DISABLE KEYS */;
INSERT INTO `databasereport_displayreport` VALUES (1,'test2','Ahemdabad','Amraiwadi','BY OWN','Immediately','91',' Enter Your Feedback Here test3',2,'2022-10-07'),(2,'m nbvcdxs','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(3,'Pani  Puri','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your jhj',1,'2022-10-07'),(4,'Whitebeard','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Ysdgdour Feedback Here',5,'2022-10-07'),(5,'wrertgyu;','Surat','Varachha','BY OWN','Immediately','91',' Enter Your Feedback Here',1,'2022-10-07'),(6,'jayessh','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(7,'jayessh','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(8,'Whitebeard','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(9,'okoko','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91','okokok Enter Your Feedback Here',1,'2022-10-07'),(10,'imdead','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','imdead Enter Your Feedback Here',1,'2022-10-07'),(11,'Test','Ahemdabad','Amraiwadi','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+91 9316909534','good',4,'2022-10-07'),(12,'Spray','Vadodara','Sayajigunj','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','lastest',3,'2022-10-07'),(13,'Night','Surat','Varachha','BY OWN','10 Minutes','+914456789087','Night',3,'2022-10-10'),(14,'Hello Yashla Noob','Surat','Varachha','Through a person known to a police officer','15 Minutes','+91 4456789087','Lol Yasn noob',1,'2022-10-07'),(15,'Jayesh','Surat','Varachha','BY OWN','Immediately','+91 6351854267',' Enter Your Feedback Hhsshsere',5,'2022-10-09'),(16,'okkkkk','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087',' Enter Your Feedback Here okkkkkkk',5,'2022-10-07'),(17,'Test','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9316909534','Testing Purpose ',3,'2022-10-07'),(18,'Test','Vadodara','Sayajigunj','BY OWN','More Than 15 Minutes','+919316909534','Testing Purpose ',4,'2022-10-07'),(19,'Test','Surat','Khatodara','BY OWN','10 Minutes','+914456789087','Testing Purpose ',4,'2022-10-07'),(20,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',5,'2022-10-07'),(21,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',3,'2022-10-07'),(22,'TEST','Vadodara','Fatehgunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+914456789087',' TESTING PURPOSE',4,'2022-10-07'),(23,'TEST','Vadodara','Fatehgunj','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(24,'TEST','Vadodara','Chhani','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(25,'TEST','Vadodara','Chhani','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','914456789087','TESTING PURPOSE',3,'2022-10-07'),(26,'suthar yash sharavanbhai','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+918320969449','what ever',5,'2022-10-07'),(27,'suthar yash sharavanbhai','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+918320969449',' Enter Your Feedback Here',4,'2022-10-08'),(28,'Vinayak Vispute ','Surat','Khatodara','BY OWN','Immediately','+91 8401282183',' Enter Your Feedback Here',4,'2022-10-09'),(29,'Jurry Meeting','Vadodara','Chhani','BY OWN','Immediately','+91 4456789087','Hope its goes Well',5,'2022-10-09'),(30,'Vinayak','Ahemdabad','Amraiwadi','Through a person known to a police officer','10 Minutes','+91 4456789087',' Enter Your Feedback Here',5,'2022-10-09'),(31,'Kartik','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+916355934557','Testing purpose ',4,'2022-10-10'),(32,'Kartik jadhav','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9769654521','My name is kartik Jadhav ',5,'2022-10-26'),(33,'kartik','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+916351854267','good',4,'2022-11-25'),(34,'Vinayak vispute','Vadodara','Channi','Through a person known to a police officer','More Than 15 Minutes','+91 8401282183','Django Project Starts',1,'2022-12-15'),(35,'234r5t67u8i','Vadodara','Channi','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+91 8401282183',' Enter Your Feedback Here',1,'2022-12-17');
/*!40000 ALTER TABLE `databasereport_displayreport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `databasereport_statewisepolicestation`
--

DROP TABLE IF EXISTS `databasereport_statewisepolicestation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `databasereport_statewisepolicestation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `state` varchar(15) NOT NULL,
  `police_station` varchar(15) NOT NULL,
  `qr_code` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `databasereport_statewisepolicestation`
--

LOCK TABLES `databasereport_statewisepolicestation` WRITE;
/*!40000 ALTER TABLE `databasereport_statewisepolicestation` DISABLE KEYS */;
INSERT INTO `databasereport_statewisepolicestation` VALUES (1,'Vadodara','Chhani','qrCodes/VadodaraChhani.png'),(2,'Vadodara','Fatehgunj','qrCodes/VadodaraFatehgunj.png'),(3,'Surat','Varachha',NULL),(4,'Surat','Khatodara',NULL),(5,'Ahemdabad','Navrangpura',NULL),(6,'Ahemdabad','Amraiwadi',NULL),(7,'Vadodara','Sayajigunj',NULL),(8,'Mumbai','Nalasopara','qrCodes/Math-640x315_September_2018_aJ7o4tn.jpg'),(9,'Maharastra','Pune','qrCodes/onepiece.PNG');
/*!40000 ALTER TABLE `databasereport_statewisepolicestation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-12-10 13:16:50.500065','61','displayReport object (61)',1,'[{\"added\": {}}]',7,1),(2,'2022-12-10 13:29:26.270021','62','displayReport object (62)',3,'',7,1),(3,'2022-12-10 13:29:55.372040','63','displayReport object (63)',1,'[{\"added\": {}}]',7,1),(4,'2022-12-10 19:40:43.374972','1','stateWisePoliceStation object (1)',1,'[{\"added\": {}}]',9,1),(5,'2022-12-10 19:41:08.953055','2','stateWisePoliceStation object (2)',1,'[{\"added\": {}}]',9,1),(6,'2022-12-10 19:41:25.750408','3','stateWisePoliceStation object (3)',1,'[{\"added\": {}}]',9,1),(7,'2022-12-10 19:41:41.652187','3','stateWisePoliceStation object (3)',2,'[{\"changed\": {\"fields\": [\"Police station\"]}}]',9,1),(8,'2022-12-10 19:42:22.209603','3','stateWisePoliceStation object (3)',2,'[{\"changed\": {\"fields\": [\"State\", \"Police station\"]}}]',9,1),(9,'2022-12-10 19:42:31.209018','3','stateWisePoliceStation object (3)',2,'[{\"changed\": {\"fields\": [\"Police station\"]}}]',9,1),(10,'2022-12-10 19:42:46.204776','3','stateWisePoliceStation object (3)',2,'[{\"changed\": {\"fields\": [\"Police station\"]}}]',9,1),(11,'2022-12-10 19:45:33.599412','4','stateWisePoliceStation object (4)',1,'[{\"added\": {}}]',9,1),(12,'2022-12-10 19:45:47.850801','5','stateWisePoliceStation object (5)',1,'[{\"added\": {}}]',9,1),(13,'2022-12-10 19:46:02.134696','6','stateWisePoliceStation object (6)',1,'[{\"added\": {}}]',9,1),(14,'2022-12-10 19:46:15.606995','7','stateWisePoliceStation object (7)',1,'[{\"added\": {}}]',9,1),(15,'2022-12-10 19:54:16.135798','8','stateWisePoliceStation object (8)',1,'[{\"added\": {}}]',9,1),(16,'2022-12-10 19:59:18.855300','9','stateWisePoliceStation object (9)',1,'[{\"added\": {}}]',9,1),(17,'2022-12-10 20:06:44.758686','9','stateWisePoliceStation object (9)',3,'',9,1),(18,'2022-12-10 20:06:44.814651','8','stateWisePoliceStation object (8)',3,'',9,1),(19,'2022-12-10 20:06:44.830830','7','stateWisePoliceStation object (7)',3,'',9,1),(20,'2022-12-10 20:06:44.854903','6','stateWisePoliceStation object (6)',3,'',9,1),(21,'2022-12-10 20:06:44.878577','5','stateWisePoliceStation object (5)',3,'',9,1),(22,'2022-12-10 20:06:44.902707','4','stateWisePoliceStation object (4)',3,'',9,1),(23,'2022-12-10 20:06:44.942828','3','stateWisePoliceStation object (3)',3,'',9,1),(24,'2022-12-10 20:06:45.222897','2','stateWisePoliceStation object (2)',3,'',9,1),(25,'2022-12-10 20:06:45.302827','1','stateWisePoliceStation object (1)',3,'',9,1),(26,'2022-12-10 20:14:12.166840','1','stateWisePoliceStation object (1)',3,'',9,1),(27,'2022-12-10 20:14:59.171424','10','stateWisePoliceStation object (10)',1,'[{\"added\": {}}]',9,1),(28,'2022-12-10 20:16:51.242526','10','stateWisePoliceStation object (10)',3,'',9,1),(29,'2022-12-10 20:29:07.686266','1','stateWisePoliceStation object (1)',2,'[]',9,1),(30,'2022-12-10 20:29:28.042615','11','stateWisePoliceStation object (11)',1,'[{\"added\": {}}]',9,1),(31,'2022-12-10 20:32:21.766208','11','stateWisePoliceStation object (11)',3,'',9,1),(32,'2022-12-10 20:32:46.675217','12','stateWisePoliceStation object (12)',1,'[{\"added\": {}}]',9,1),(33,'2022-12-10 20:33:16.750219','12','stateWisePoliceStation object (12)',3,'',9,1),(34,'2022-12-10 20:34:56.102191','3','stateWisePoliceStation object (3)',1,'[{\"added\": {}}]',9,1),(35,'2022-12-10 20:35:23.981703','4','stateWisePoliceStation object (4)',1,'[{\"added\": {}}]',9,1),(36,'2022-12-10 20:35:37.814756','5','stateWisePoliceStation object (5)',1,'[{\"added\": {}}]',9,1),(37,'2022-12-10 20:35:51.365185','6','stateWisePoliceStation object (6)',1,'[{\"added\": {}}]',9,1),(38,'2022-12-13 20:49:52.566388','8','stateWisePoliceStation object (8)',2,'[{\"changed\": {\"fields\": [\"Qr code\"]}}]',9,1),(39,'2022-12-13 21:40:34.378431','8','stateWisePoliceStation object (8)',2,'[{\"changed\": {\"fields\": [\"Qr code\"]}}]',9,1),(40,'2022-12-14 06:59:09.532516','2','stateWisePoliceStation object (2)',2,'[{\"changed\": {\"fields\": [\"Qr code\"]}}]',9,1),(41,'2022-12-14 06:59:27.694166','1','stateWisePoliceStation object (1)',2,'[{\"changed\": {\"fields\": [\"Qr code\"]}}]',9,1),(42,'2022-12-25 07:51:30.741031','9','stateWisePoliceStation object (9)',1,'[{\"added\": {}}]',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(7,'database','displayreport'),(8,'databaseReport','displayreport'),(9,'databaseReport','statewisepolicestation'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-12-09 10:26:26.703078'),(2,'auth','0001_initial','2022-12-09 10:26:32.406200'),(3,'admin','0001_initial','2022-12-09 10:26:33.765667'),(4,'admin','0002_logentry_remove_auto_add','2022-12-09 10:26:33.874957'),(5,'admin','0003_logentry_add_action_flag_choices','2022-12-09 10:26:33.968894'),(6,'contenttypes','0002_remove_content_type_name','2022-12-09 10:26:34.687455'),(7,'auth','0002_alter_permission_name_max_length','2022-12-09 10:26:35.218895'),(8,'auth','0003_alter_user_email_max_length','2022-12-09 10:26:35.468816'),(9,'auth','0004_alter_user_username_opts','2022-12-09 10:26:35.562568'),(10,'auth','0005_alter_user_last_login_null','2022-12-09 10:26:36.125141'),(11,'auth','0006_require_contenttypes_0002','2022-12-09 10:26:36.171910'),(12,'auth','0007_alter_validators_add_error_messages','2022-12-09 10:26:36.265768'),(13,'auth','0008_alter_user_username_max_length','2022-12-09 10:26:36.828079'),(14,'auth','0009_alter_user_last_name_max_length','2022-12-09 10:26:37.437453'),(15,'auth','0010_alter_group_name_max_length','2022-12-09 10:26:37.625140'),(16,'auth','0011_update_proxy_permissions','2022-12-09 10:26:37.750020'),(17,'auth','0012_alter_user_first_name_max_length','2022-12-09 10:26:38.281388'),(18,'sessions','0001_initial','2022-12-09 10:26:38.718773'),(19,'database','0001_initial','2022-12-10 12:58:38.381207'),(20,'databaseReport','0001_initial','2022-12-10 14:05:57.865733'),(21,'databaseReport','0002_statewisepolicestation','2022-12-10 19:32:14.616200'),(23,'databaseReport','0003_statewisepolicestation_qr_code','2022-12-13 21:37:10.349607'),(24,'databaseReport','0004_alter_displayreport_date','2022-12-15 10:15:01.774001');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('aqubey8mlb9xp8dbrrtygw9a7rw4my64','.eJxVjDsOwyAQRO9CHaHAOhinTO8zoIVdYhKMJX-qKHcPllw45byZeR_hcFsHty08u0TiLpS4nJnH8OayF_TC8pxkmMo6Jy_3iTzaRfYTcX4c2z_BgMtQ3545UIBWgyG0Vw_QsYnkNVlsWoAmqmjUTXUWFDdKtxFNVBVrJA8WqnTXVRPSmEqNPGLKpxy3nF3BkSsT3x9UKkZR:1p3aeH:2zuSSlHtamhthu3NBLqsuMukbVRLP3T9s6xjYFqubjI','2022-12-09 10:32:13.412282'),('di6d6fzaxduiv5a5cbo7fc3eypw8tf7a','.eJxVjDsOwyAQRO9CHaHAOhinTO8zoIVdYhKMJX-qKHcPllw45byZeR_hcFsHty08u0TiLpS4nJnH8OayF_TC8pxkmMo6Jy_3iTzaRfYTcX4c2z_BgMtQ3545UIBWgyG0Vw_QsYnkNVlsWoAmqmjUTXUWFDdKtxFNVBVrJA8WqnTXVRPSmEqNPGLKpxy3nF3BkSsT3x9UKkZR:1p3b0p:SjUIHjeccd1n5GyDuZp85O1ugy_v274QXIX06o7daKA','2022-12-09 10:55:31.617566'),('e10j99f3a1p4qsayhtzyx3qkaqjkm4nj','.eJxVjDsOwyAQRO9CHaHAOhinTO8zoIVdYhKMJX-qKHcPllw45byZeR_hcFsHty08u0TiLpS4nJnH8OayF_TC8pxkmMo6Jy_3iTzaRfYTcX4c2z_BgMtQ3545UIBWgyG0Vw_QsYnkNVlsWoAmqmjUTXUWFDdKtxFNVBVrJA8WqnTXVRPSmEqNPGLKpxy3nF3BkSsT3x9UKkZR:1p4lul:sSu5NjcKj1LA871ULLFagPgUTuQMJdi-ZVnt_zfg-t0','2022-12-12 16:46:07.938713'),('fsik47e50ff7firnfrm7ix5o9q6q8yap','.eJxVjDsOwyAQRO9CHaHAOhinTO8zoIVdYhKMJX-qKHcPllw45byZeR_hcFsHty08u0TiLpS4nJnH8OayF_TC8pxkmMo6Jy_3iTzaRfYTcX4c2z_BgMtQ3545UIBWgyG0Vw_QsYnkNVlsWoAmqmjUTXUWFDdKtxFNVBVrJA8WqnTXVRPSmEqNPGLKpxy3nF3BkSsT3x9UKkZR:1p6SNP:4ievqSt6W7CtIFR7fVYIb8cNev0tzq_0U5yGX22MOj8','2022-12-17 08:26:59.457294'),('k8lmyfalo2f0ukpdc3l85u58hfeqy08u','.eJxVjDsOwjAQRO_iGllrx5-Ykj5nsNZeLwkgR4qTCnF3EikFFNPMezNvEXFbx7i1ssSJxFUocfntEuZnqQegB9b7LPNc12VK8lDkSZscZiqv2-n-HYzYxn2dbOCuNxqYPIEJzBaS1uSsZU0ei93TqwzGB9WF0neBFXt0GgjAsfh8AdvJN38:1p5Bk4:AYqV6Xgi_h_UiAyTc5_StYWLSKCmBKiPZ_cUSRXEHWE','2022-12-27 20:19:08.015287'),('kk9ou1bezgf1rr6nz77umg3mcysytr17','.eJxVjDsOwyAQRO9CHaHAOhinTO8zoIVdYhKMJX-qKHcPllw45byZeR_hcFsHty08u0TiLpS4nJnH8OayF_TC8pxkmMo6Jy_3iTzaRfYTcX4c2z_BgMtQ3545UIBWgyG0Vw_QsYnkNVlsWoAmqmjUTXUWFDdKtxFNVBVrJA8WqnTXVRPSmEqNPGLKpxy3nF3BkSsT3x9UKkZR:1p3awr:7MFYQPfn5ypgizshsyHoeCwib3mrXOZTC7lHPbDc7dw','2022-12-09 10:51:25.905864'),('nm2wgwq379vcy69pixzrm8fjwsp61s5y','.eJxVjM0OwiAQhN-FsyHCVkq96d1nIAu7WJTSpD8n47tLkx7qcb6Z-T7C4br0bp15conEVShxOjKP4c1lK-iF5TnKMJZlSl5uE7m3s3yMxPm-b_8EPc59fXvmQAFaDYbQnj1AxyaS12SxaQGaqKJRF9VZUNwo3UY0UVWskTxYqNJNV003GlKpkQdM-ZDjmrMrOHBl4vsDTKpGEQ:1p9LsC:in1F4w0fsqPLzqj3mRf2dQb83jsQd-y-wTpdRDmqrvM','2022-12-25 08:06:44.870137'),('wcueyqii0nvyjbby3xt5pctak67qgkhw','e30:1p6SIX:y3KaTsJnPUrFTqdM11Op3sx7xhQd-9jjzz1G2F11WrU','2022-12-17 08:21:57.826277');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportdatabase`
--

DROP TABLE IF EXISTS `reportdatabase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportdatabase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `police_station` varchar(50) NOT NULL,
  `how_come` varchar(50) NOT NULL,
  `time_taken` varchar(50) NOT NULL,
  `number` varchar(16) NOT NULL,
  `feedback` varchar(400) NOT NULL,
  `rating` int NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportdatabase`
--

LOCK TABLES `reportdatabase` WRITE;
/*!40000 ALTER TABLE `reportdatabase` DISABLE KEYS */;
INSERT INTO `reportdatabase` VALUES (28,'test2','Ahemdabad','Amraiwadi','BY OWN','Immediately','91',' Enter Your Feedback Here test3',2,'2022-10-07'),(29,'m nbvcdxs','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(30,'Pani  Puri','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your jhj',1,'2022-10-07'),(31,'Whitebeard','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Ysdgdour Feedback Here',5,'2022-10-07'),(32,'wrertgyu;','Surat','Varachha','BY OWN','Immediately','91',' Enter Your Feedback Here',1,'2022-10-07'),(33,'jayessh','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(34,'jayessh','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(35,'Whitebeard','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(36,'okoko','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91','okokok Enter Your Feedback Here',1,'2022-10-07'),(37,'imdead','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','imdead Enter Your Feedback Here',1,'2022-10-07'),(38,'Test','Ahemdabad','Amraiwadi','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+91 9316909534','good',4,'2022-10-07'),(39,'Spray','Vadodara','Sayajigunj','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','lastest',3,'2022-10-07'),(40,'Night','Surat','Varachha','BY OWN','10 Minutes','+914456789087','Night',3,'2022-10-10'),(41,'Hello Yashla Noob','Surat','Varachha','Through a person known to a police officer','15 Minutes','+91 4456789087','Lol Yasn noob',1,'2022-10-07'),(42,'Jayesh','Surat','Varachha','BY OWN','Immediately','+91 6351854267',' Enter Your Feedback Hhsshsere',5,'2022-10-09'),(43,'okkkkk','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087',' Enter Your Feedback Here okkkkkkk',5,'2022-10-07'),(44,'Test','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9316909534','Testing Purpose ',3,'2022-10-07'),(45,'Test','Vadodara','Sayajigunj','BY OWN','More Than 15 Minutes','+919316909534','Testing Purpose ',4,'2022-10-07'),(46,'Test','Surat','Khatodara','BY OWN','10 Minutes','+914456789087','Testing Purpose ',4,'2022-10-07'),(47,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',5,'2022-10-07'),(48,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',3,'2022-10-07'),(49,'TEST','Vadodara','Fatehgunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+914456789087',' TESTING PURPOSE',4,'2022-10-07'),(50,'TEST','Vadodara','Fatehgunj','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(51,'TEST','Vadodara','Chhani','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(52,'TEST','Vadodara','Chhani','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',3,'2022-10-07'),(53,'suthar yash sharavanbhai','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+918320969449','what ever',5,'2022-10-07'),(54,'suthar yash sharavanbhai','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+918320969449',' Enter Your Feedback Here',4,'2022-10-08'),(55,'Vinayak Vispute ','Surat','Khatodara','BY OWN','Immediately','+91 8401282183',' Enter Your Feedback Here',4,'2022-10-09'),(56,'Jurry Meeting','Vadodara','Chhani','BY OWN','Immediately','+91 4456789087','Hope its goes Well',5,'2022-10-09'),(57,'Vinayak','Ahemdabad','Amraiwadi','Through a person known to a police officer','10 Minutes','+91 4456789087',' Enter Your Feedback Here',5,'2022-10-09'),(58,'Kartik','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+916355934557','Testing purpose ',4,'2022-10-10'),(59,'Kartik jadhav','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9769654521','My name is kartik Jadhav ',5,'2022-10-26'),(60,'kartik','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+916351854267','good',4,'2022-11-25'),(61,'test2','Ahemdabad','Amraiwadi','BY OWN','Immediately','91',' Enter Your Feedback Here test3',2,'2022-10-07'),(62,'test2','Ahemdabad','Amraiwadi','BY OWN','Immediately','91',' Enter Your Feedback Here test3',2,'2022-10-07'),(63,'m nbvcdxs','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(64,'Pani  Puri','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your jhj',1,'2022-10-07'),(65,'Whitebeard','Surat','Varachha','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Ysdgdour Feedback Here',5,'2022-10-07'),(66,'wrertgyu;','Surat','Varachha','BY OWN','Immediately','91',' Enter Your Feedback Here',1,'2022-10-07'),(67,'jayessh','Ahemdabad','Amraiwadi','BY OWN','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(68,'jayessh','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(69,'Whitebeard','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91',' Enter Your Feedback Here',1,'2022-10-07'),(70,'okoko','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','91','okokok Enter Your Feedback Here',1,'2022-10-07'),(71,'imdead','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','imdead Enter Your Feedback Here',1,'2022-10-07'),(72,'Test','Ahemdabad','Amraiwadi','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+91 9316909534','good',4,'2022-10-07'),(73,'Spray','Vadodara','Sayajigunj','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087','lastest',3,'2022-10-07'),(74,'Night','Surat','Varachha','BY OWN','10 Minutes','+914456789087','Night',3,'2022-10-10'),(75,'Hello Yashla Noob','Surat','Varachha','Through a person known to a police officer','15 Minutes','+91 4456789087','Lol Yasn noob',1,'2022-10-07'),(76,'Jayesh','Surat','Varachha','BY OWN','Immediately','+91 6351854267',' Enter Your Feedback Hhsshsere',5,'2022-10-09'),(77,'okkkkk','Ahemdabad','Amraiwadi','Through a person known to a police officer','More Than 15 Minutes','+91 4456789087',' Enter Your Feedback Here okkkkkkk',5,'2022-10-07'),(78,'Test','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9316909534','Testing Purpose ',3,'2022-10-07'),(79,'Test','Vadodara','Sayajigunj','BY OWN','More Than 15 Minutes','+919316909534','Testing Purpose ',4,'2022-10-07'),(80,'Test','Surat','Khatodara','BY OWN','10 Minutes','+914456789087','Testing Purpose ',4,'2022-10-07'),(81,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',5,'2022-10-07'),(82,'TEST','Ahemdabad','Navrangpura','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+914456789087','TESTING PURPOSE',3,'2022-10-07'),(83,'TEST','Vadodara','Fatehgunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+914456789087',' TESTING PURPOSE',4,'2022-10-07'),(84,'TEST','Vadodara','Fatehgunj','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(85,'TEST','Vadodara','Chhani','BY OWN','More Than 15 Minutes','+914456789087','TESTING PURPOSE',4,'2022-10-07'),(86,'TEST','Vadodara','Chhani','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','914456789087','TESTING PURPOSE',3,'2022-10-07'),(87,'suthar yash sharavanbhai','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+918320969449','what ever',5,'2022-10-07'),(88,'suthar yash sharavanbhai','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+918320969449',' Enter Your Feedback Here',4,'2022-10-08'),(89,'Vinayak Vispute ','Surat','Khatodara','BY OWN','Immediately','+91 8401282183',' Enter Your Feedback Here',4,'2022-10-09'),(90,'Jurry Meeting','Vadodara','Chhani','BY OWN','Immediately','+91 4456789087','Hope its goes Well',5,'2022-10-09'),(91,'Vinayak','Ahemdabad','Amraiwadi','Through a person known to a police officer','10 Minutes','+91 4456789087',' Enter Your Feedback Here',5,'2022-10-09'),(92,'Kartik','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','10 Minutes','+916355934557','Testing purpose ',4,'2022-10-10'),(93,'Kartik jadhav','Vadodara','Sayajigunj','WITH YOUR NEIGHBHOUR/FRIEND/RELATIVE','15 Minutes','+91 9769654521','My name is kartik Jadhav ',5,'2022-10-26'),(94,'kartik','Vadodara','Sayajigunj','Through a person known to a police officer','15 Minutes','+916351854267','good',4,'2022-11-25');
/*!40000 ALTER TABLE `reportdatabase` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 16:44:57