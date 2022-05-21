CREATE TABLE IF NOT EXISTS `617_track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO 617_track_users VALUES
(1,'Adrian Le','user1','user1@gmail.com',md5('pass'),'https://via.placeholder.com/400/839/fff/?text=user1','2022-01-02 10:52:08'),
(2,'Livingston Brown','user2','user2@gmail.com',md5('pass'),'https://via.placeholder.com/400/939/fff/?text=user2','2022-03-31 07:42:30'),
(3,'Dejesus Sandoval','user3','user3@gmail.com',md5('pass'),'https://via.placeholder.com/400/711/fff/?text=user3','2022-04-08 05:07:17'),
(4,'Tommie Cooley','user4','user4@gmail.com',md5('pass'),'https://via.placeholder.com/400/872/fff/?text=user4','2022-02-02 06:33:22'),
(5,'Pacheco Padilla','user5','user5@gmail.com',md5('pass'),'https://via.placeholder.com/400/879/fff/?text=user5','2022-04-08 02:59:19'),
(6,'Melton Yates','user6','user6@gmail.com',md5('pass'),'https://via.placeholder.com/400/839/fff/?text=user6','2022-04-01 10:18:06'),
(7,'Frances Levine','user7','user7@gmail.com',md5('pass'),'https://via.placeholder.com/400/849/fff/?text=user7','2022-02-17 03:32:43'),
(8,'Williams Mendez','user8','user8@gmail.com',md5('pass'),'https://via.placeholder.com/400/754/fff/?text=user8','2022-02-13 04:59:35'),
(9,'Holt Stephens','user9','user9@gmail.com',md5('pass'),'https://via.placeholder.com/400/944/fff/?text=user9','2022-02-16 02:11:22'),
(10,'Ashley Ward','user10','user10@gmail.com',md5('pass'),'https://via.placeholder.com/400/933/fff/?text=user10','2022-01-15 08:33:56');