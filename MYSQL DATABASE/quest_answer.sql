-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: quest
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `is_answer` int NOT NULL,
  `content` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`answer_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,0,'Lionel Messi','2023-10-04 07:49:45'),(2,1,0,'Cristiano Ronaldo','2023-10-04 07:49:45'),(3,1,0,'Neymar Jr.','2023-10-04 07:49:45'),(4,1,1,'Robert Lewandowski','2023-10-04 07:49:45'),(5,2,0,'Brazil','2023-10-04 07:49:45'),(6,2,0,'Argentina','2023-10-04 07:49:45'),(7,2,0,'Đức','2023-10-04 07:49:45'),(8,2,1,'Pháp','2023-10-04 07:49:45'),(9,3,1,'Gareth Southgate','2023-10-04 07:49:45'),(10,3,0,'Roberto Mancini','2023-10-04 07:49:45'),(11,3,0,'Joachim Löw','2023-10-04 07:49:45'),(12,3,0,'Didier Deschamps','2023-10-04 07:49:45'),(13,4,0,'Taylor Swift','2023-10-04 07:49:45'),(14,4,1,'Ed Sheeran','2023-10-04 07:49:45'),(15,4,0,'Bruno Mars','2023-10-04 07:49:45'),(16,4,0,'Justin Bieber','2023-10-04 07:49:45'),(17,5,0,'“1989”','2023-10-04 07:49:45'),(18,5,1,'“Folklore”','2023-10-04 07:49:45'),(19,5,0,'“Reputation”','2023-10-04 07:49:45'),(20,5,0,'“Lover”','2023-10-04 07:49:45'),(21,6,1,'Luis Fonsi và Daddy Yankee','2023-10-04 07:49:45'),(22,6,0,'Shakira','2023-10-04 07:49:45'),(23,6,0,'Enrique Iglesias','2023-10-04 07:49:45'),(24,6,1,'J Balvin','2023-10-04 07:49:45');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 17:31:32
