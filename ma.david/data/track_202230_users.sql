-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2022 at 06:12 PM
-- Server version: 5.6.51-cll-lve
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kmaproducts`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_202230_users`
--

CREATE TABLE `track_202230_users` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_202230_users`
--

INSERT INTO `track_202230_users` (`id`, `name`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Margaret Ramos', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1653346868.4415_jan-baborak-4STq2B24S1k-unsplash.jpg', '2022-05-16 11:32:38'),
(2, 'Alfreda Rice', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/910/fff/?text=user2', '2022-01-24 02:37:50'),
(3, 'Barber Ryan', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/867/fff/?text=user3', '2022-05-13 06:08:33'),
(4, 'Tara Faulkner', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/939/fff/?text=user4', '2022-01-11 07:49:47'),
(5, 'Duncan Browning', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/919/fff/?text=user5', '2022-05-01 07:05:42'),
(6, 'Wagner Alvarado', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/911/fff/?text=user6', '2022-03-30 02:10:59'),
(7, 'Alma Hardin', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/713/fff/?text=user7', '2022-05-16 04:05:38'),
(8, 'Butler Hewitt', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/789/fff/?text=user8', '2022-03-04 11:45:15'),
(9, 'Jan Edwards', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/738/fff/?text=user9', '2022-01-14 05:25:13'),
(10, 'Flowers Combs', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/795/fff/?text=user10', '2022-03-18 09:58:02'),
(11, 'David Kyungseok Ma', 'user0', 'user0@giantstep.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1653368193.6601_Screen Shot 2022-05-23 at 9.56.13 PM.png', '2022-05-23 21:54:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_202230_users`
--
ALTER TABLE `track_202230_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_202230_users`
--
ALTER TABLE `track_202230_users`
  MODIFY `id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
