-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 11, 2020 at 04:37 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `samashop`
--

-- --------------------------------------------------------

--
-- Table structure for table `boutique`
--

DROP TABLE IF EXISTS `boutique`;
CREATE TABLE IF NOT EXISTS `boutique` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `nb_produits` int NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `note_boutique` int NOT NULL,
  `slogan` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `utilisateur_id` bigint DEFAULT NULL,
  `logo_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq0gw7f5s9a4iykk12kflbtojm` (`utilisateur_id`),
  KEY `FK28elcou5d8ejj2w8yyfsth7rc` (`logo_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `boutique`
--

INSERT INTO `boutique` (`id`, `description`, `nb_produits`, `nom`, `note_boutique`, `slogan`, `telephone`, `whatsapp`, `utilisateur_id`, `logo_id`) VALUES
(1, 'Couture et Pret à Porter Hommes Femmes Enfants', 0, 'Habza', 0, 'Shine Bright Like a Diamond', '+221338595359', '+221773262228', 228, 11),
(2, 'Collections hivers et été', 0, 'MaximCollections', 0, NULL, '+221773060589', NULL, 228, 30);

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`ID`, `Nom`) VALUES
(1, 'Habits'),
(2, 'Sacs'),
(3, 'Chaussures'),
(4, 'Electronique'),
(5, 'Accessoires'),
(6, 'Autres');

-- --------------------------------------------------------

--
-- Table structure for table `confirmation_token`
--

DROP TABLE IF EXISTS `confirmation_token`;
CREATE TABLE IF NOT EXISTS `confirmation_token` (
  `token_id` bigint NOT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`token_id`),
  KEY `FKjcfifp03kr0utybj55h2n0pat` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `confirmation_token`
--

INSERT INTO `confirmation_token` (`token_id`, `confirmation_token`, `created_date`, `user_id`) VALUES
(1, '5a0c439c-e134-4623-aa7e-b99f4798a092', '2020-08-07 14:22:05', 5),
(2, '27615f80-1b3c-495a-a1bb-54a836778118', '2020-08-07 14:22:24', 5),
(3, 'd4b8e05f-1c2e-480b-ad71-291314715b15', '2020-08-07 14:24:30', 5),
(4, '590fd3ef-32cf-4a3f-b4eb-6df1c38341c3', '2020-08-07 14:26:33', 5),
(5, 'ddacd068-1cd2-4a2e-a885-54cd533e5430', '2020-08-07 14:29:12', 5),
(6, '2647ac0f-6cbf-44f6-84d1-c34ebd4e58cc', '2020-08-07 14:34:19', 197),
(7, 'd57111c9-5597-44fd-a222-063cbebedb73', '2020-08-07 15:04:34', 5),
(8, '976e0f88-1baf-441b-a4ff-75c834515f96', '2020-08-07 15:06:32', 5),
(9, '1321254b-71bb-4fd6-bef5-edef6e8eca08', '2020-08-07 15:08:06', 200),
(10, '3a05584d-d819-43c9-9be0-98bbd644145d', '2020-08-07 15:17:04', 201),
(11, '0a16c0e1-a4c2-40d9-a949-bfcf863fe1a0', '2020-08-07 15:19:26', 202),
(12, '52f555f3-dd69-44a1-8fb6-e6b8182ebdd0', '2020-08-07 15:50:15', 203),
(13, 'fe7caf6d-08ea-4848-abf0-d4ac0de0f804', '2020-08-07 16:03:21', 204),
(14, '67326ee5-5eca-47bc-8f18-1dfbaf500e50', '2020-08-07 16:10:00', 205),
(15, '45de49aa-948e-4f9f-a235-d93df9b44fc4', '2020-08-07 16:10:54', 206),
(16, '979f6179-fa80-4959-8487-8c193d9822cd', '2020-08-07 16:11:32', 207),
(17, 'e2d68c6a-f5f3-477d-8517-a3b274729d6d', '2020-08-07 16:22:56', 208),
(18, '3a5be0d3-9214-413a-9766-e7d489023e58', '2020-08-07 16:40:25', 209),
(19, 'e95f361d-c969-4f50-a435-741dcb8043d2', '2020-08-07 16:41:18', 210),
(20, '9ae86c8e-8c66-41b0-acc4-b544bf15511a', '2020-08-10 12:59:24', 211),
(21, '67544bc6-4a20-4c30-8080-d4862954f6bf', '2020-08-10 13:09:04', 212),
(22, 'a375af24-10c0-48bf-8d31-f89c236ff0d0', '2020-08-10 13:42:36', 213),
(23, '4d851b0a-1122-4114-8dd9-ad05b08583f9', '2020-08-13 17:03:03', 214),
(24, '313af3f2-9bc3-4b46-a130-4406741f9985', '2020-08-21 15:16:51', 225),
(25, 'f7348628-5bd7-4fba-9fc5-75501ab0332e', '2020-08-21 15:26:48', 226),
(26, '2fc137d8-726e-4fc9-8538-816ef3728f2c', '2020-08-21 15:43:33', 227),
(27, '5526da0b-e144-4610-b367-2d9e584212b0', '2020-08-23 15:52:00', 228),
(28, '49847724-62a1-41c9-aeb4-195a52121869', '2020-08-23 22:35:26', 229),
(29, 'd83cd766-4444-4ae2-832d-4c742b9244d1', '2020-08-23 22:36:32', 230);

-- --------------------------------------------------------

--
-- Table structure for table `couleur`
--

DROP TABLE IF EXISTS `couleur`;
CREATE TABLE IF NOT EXISTS `couleur` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `disponible` bit(1) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `produit_id` bigint DEFAULT NULL,
  `ordre` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3cykak6wdv1uymlg0xcijqhwj` (`produit_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `couleur`
--

INSERT INTO `couleur` (`id`, `disponible`, `nom`, `produit_id`, `ordre`) VALUES
(1, b'0', 'BLANC', 6, 1),
(2, b'0', 'GRIS', 6, 2),
(3, b'1', 'NOIR', 6, 3),
(4, b'0', 'MARRON', 6, 4),
(5, b'0', 'JAUNE', 6, 5),
(6, b'0', 'ORANGE', 6, 6),
(7, b'0', 'ROUGE', 6, 7),
(8, b'0', 'ROSE', 6, 8),
(9, b'0', 'VIOLET', 6, 9),
(10, b'0', 'BLEU', 6, 10),
(11, b'0', 'VERT', 6, 11);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(30);

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `chemin_fichier` varchar(255) DEFAULT NULL,
  `ordre_illustration` tinyint NOT NULL,
  `type_media` int DEFAULT NULL,
  `boutique_id` bigint DEFAULT NULL,
  `produit_id` bigint DEFAULT NULL,
  `utilisateur_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa8di6g0q33xi62cabxuq97eod` (`boutique_id`),
  KEY `FKcsrw5j11d3xr85e8dluqvohqp` (`produit_id`),
  KEY `FK3kxd07upex8iris3lv0non1td` (`utilisateur_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `chemin_fichier`, `ordre_illustration`, `type_media`, `boutique_id`, `produit_id`, `utilisateur_id`) VALUES
(1, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/6/1.jpg', 4, NULL, NULL, 6, NULL),
(2, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/6/2.jpg', 2, NULL, NULL, 6, NULL),
(3, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/6/3.JPG', 3, NULL, NULL, 6, NULL),
(4, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/6/4.JPG', 1, NULL, NULL, 6, NULL),
(5, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/maximcollections/Produits/5/5.jpg', 1, NULL, NULL, 5, NULL),
(7, 'http://127.0.0.1:8887/Produits/item-05.jpg', 0, NULL, NULL, 2, NULL),
(8, 'http://127.0.0.1:8887/Produits/item-07.jpg', 0, NULL, NULL, 3, NULL),
(9, 'http://127.0.0.1:8887/Produits/shop-item-09.jpg', 0, NULL, NULL, 4, NULL),
(10, 'http://127.0.0.1:8887/Produits/item-cart-03.jpg', 0, NULL, NULL, 7, NULL),
(11, 'http://127.0.0.1:8887/Boutiques/2.png', 0, NULL, NULL, NULL, NULL),
(29, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/1/1.jpg', 0, NULL, 1, 1, NULL),
(30, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/maximcollections/logo.png', 0, NULL, NULL, NULL, NULL),
(31, 'http://127.0.0.1:8887/Utilisateurs/228/Boutiques/habza/Produits/6/5.jpg', 0, NULL, NULL, 6, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `note_produit` int NOT NULL,
  `prix` double NOT NULL,
  `stock` int NOT NULL,
  `boutique_id` bigint DEFAULT NULL,
  `utilisateur_id` bigint DEFAULT NULL,
  `categorie_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKib0723v64htrn73dji6qgu9ov` (`boutique_id`),
  KEY `FK3lwwtoug02os3a4cg7o137lbq` (`utilisateur_id`),
  KEY `FK52xhp55kbbl6u4rbluxm3g9hw` (`categorie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`id`, `description`, `libelle`, `note_produit`, `prix`, `stock`, `boutique_id`, `utilisateur_id`, `categorie_id`) VALUES
(1, 'Sac à dos Fashion Unisexe', 'Sac Habza DeLuxee', 0, 11000, 0, 1, 228, 1),
(2, NULL, 'Montre Habza', 0, 15000, 0, 1, 228, 1),
(3, NULL, 'Sous Fesses Maxim', 0, 7500, 0, 2, 228, 1),
(4, NULL, 'Lunettes Habza', 0, 35000, 0, 1, 228, 1),
(5, 'Lunnettes Habza Version Maxim', 'Chaussures Maxim', 0, 30000, 0, 2, 228, 1),
(6, 'Este Simili Cuir7 este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7este Simili Cuir7dsds', 'Veste Cuir Habza DeLuxe', 0, 27000, 0, 1, 228, 1),
(7, NULL, 'Test Maxim', 0, 0, 0, 2, 228, 1);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actif` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mot_de_passe` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `nom_utilisateur` varchar(255) DEFAULT NULL,
  `note_vendeur` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=234 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `actif`, `email`, `mot_de_passe`, `nom`, `nom_utilisateur`, `note_vendeur`, `prenom`, `role`, `telephone`, `email_id`) VALUES
(229, b'1', 'ffm', '$2a$10$gKnIimyBd8LbbQ0gZcAYH.PXZA.zFI6xW8iERFG9CpU3a2TF25mdm', NULL, NULL, NULL, NULL, 1, NULL, NULL),
(230, b'1', 'fm', '$2a$10$3yP67PWEQgk7Gwwa.neIsOkg6mZ6xvVS7XYkrFY3m6cBLBCTBIcOq', NULL, NULL, NULL, NULL, 1, NULL, NULL),
(221, b'1', 'aiden_upwfrag_adejbiden@tfbnw.net', NULL, 'Adejbiden', NULL, NULL, 'Aiden', 1, NULL, NULL),
(228, b'1', 'amsatambengue@gmail.com', '$2a$10$wk05qCCPeoAUKvTW4tE3OuGFNedk9gYveFHgytaSaDIlgtQll2Zzu', 'Mbengue', NULL, NULL, 'Amsata', 1, NULL, NULL),
(211, b'1', 'mansourgaye132@gmail.com', 'z', 'Gaye', NULL, NULL, 'Mansour', 1, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
