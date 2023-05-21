INSERT INTO person (id, name, isUser) VALUES (1, 'Test user''s name', TRUE);
INSERT INTO person (id, name, isUser) VALUES (2, 'Wilma Rippin', FALSE);
INSERT INTO person (id, name, isUser) VALUES (3, 'Arnold Corwin', FALSE);
INSERT INTO person (id, name, isUser) VALUES (4, 'Yvonne Hayes', FALSE);
INSERT INTO person (id, name, isUser) VALUES (5, 'Arlene Braun', FALSE);
INSERT INTO person (id, name, isUser) VALUES (6, 'Laura Kshlerin', FALSE);
INSERT INTO person (id, name, isUser) VALUES (7, 'Kristi Upton', FALSE);
INSERT INTO person (id, name, isUser) VALUES (8, 'Daniel Okuneva', FALSE);
INSERT INTO person (id, name, isUser) VALUES (9, 'Miss Rhonda Hintz', FALSE);
INSERT INTO person (id, name, isUser) VALUES (10, 'Gordon Kautzer', FALSE);
INSERT INTO person (id, name, isUser) VALUES (11, 'Joan Davis', FALSE);
INSERT INTO person (id, name, isUser) VALUES (12, 'Shannon Schulist', FALSE);
INSERT INTO person (id, name, isUser) VALUES (13, 'Leon Gislason MD', FALSE);
INSERT INTO person (id, name, isUser) VALUES (14, 'Michele Hodkiewicz', FALSE);
INSERT INTO person (id, name, isUser) VALUES (15, 'Marta Hackett-DuBuque Jr.', FALSE);
INSERT INTO person (id, name, isUser) VALUES (16, 'Grady Dickens', FALSE);
INSERT INTO person (id, name, isUser) VALUES (17, 'Willie Crooks', FALSE);
INSERT INTO person (id, name, isUser) VALUES (18, 'Mona Hyatt', FALSE);
INSERT INTO person (id, name, isUser) VALUES (19, 'Anita Keebler', FALSE);
INSERT INTO group (id, name, dateCreated) VALUES (0, 'Gutkowski, Kertzmann and Glover', '2023-01-17T16:03:52.094Z');
INSERT INTO group_member (group_id, member_id) VALUES (0, 2);
INSERT INTO group_member (group_id, member_id) VALUES (0, 3);
INSERT INTO group_member (group_id, member_id) VALUES (0, 4);
INSERT INTO group_member (group_id, member_id) VALUES (0, 5);
INSERT INTO group_member (group_id, member_id) VALUES (0, 6);
INSERT INTO group_member (group_id, member_id) VALUES (0, 7);
INSERT INTO group (id, name, dateCreated) VALUES (1, 'Schiller - Langworth', '2022-12-28T09:37:40.185Z');
INSERT INTO group_member (group_id, member_id) VALUES (1, 8);
INSERT INTO group_member (group_id, member_id) VALUES (1, 9);
INSERT INTO group_member (group_id, member_id) VALUES (1, 10);
INSERT INTO group_member (group_id, member_id) VALUES (1, 11);
INSERT INTO group_member (group_id, member_id) VALUES (1, 12);
INSERT INTO group_member (group_id, member_id) VALUES (1, 13);
INSERT INTO group (id, name, dateCreated) VALUES (2, 'Boyle - Ruecker', '2022-10-09T09:28:23.677Z');
INSERT INTO group_member (group_id, member_id) VALUES (2, 14);
INSERT INTO group_member (group_id, member_id) VALUES (2, 15);
INSERT INTO group_member (group_id, member_id) VALUES (2, 16);
INSERT INTO group_member (group_id, member_id) VALUES (2, 17);
INSERT INTO group_member (group_id, member_id) VALUES (2, 18);
INSERT INTO group_member (group_id, member_id) VALUES (2, 19);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'delectus est excepturi', '2022-11-03T21:10:29.298Z', 'payment', NULL, 1, 279, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'illum occaecati exercitationem', '2022-12-21T18:37:51.036Z', 'expense', 2, 1, 735, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'harum vel ducimus', '2023-05-18T07:00:07.615Z', 'expense', 3, 1, 605, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'ea exercitationem delectus', '2022-08-23T14:35:21.568Z', 'expense', 4, 1, 894, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'inventore illo veritatis', '2023-03-15T16:52:16.664Z', 'expense', 5, 1, 447, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'eaque rerum optio', '2023-02-12T01:50:49.884Z', 'expense', 6, 1, 752, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'totam ratione cum', '2022-09-27T10:55:59.354Z', 'expense', 7, 1, 109, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'ab ipsum doloribus', '2022-11-19T08:50:51.943Z', 'expense', 8, 1, 427, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'dolor aliquam incidunt', '2023-05-12T23:47:57.677Z', 'expense', 9, 1, 508, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'quisquam rem inventore', '2022-11-16T07:21:31.658Z', 'expense', 10, 1, 815, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'aperiam at similique', '2022-12-30T15:31:08.302Z', 'expense', 11, 1, 70, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'architecto veniam deserunt', '2022-10-03T13:25:54.037Z', 'expense', 12, 1, 103, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'ducimus provident occaecati', '2023-01-19T23:44:42.621Z', 'expense', 13, 1, 713, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'suscipit earum quas', '2023-03-19T18:08:10.737Z', 'expense', 14, 1, 58, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'iste non officia', '2022-11-20T10:55:54.462Z', 'expense', 15, 1, 387, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'labore voluptatem ad', '2023-01-11T12:39:07.363Z', 'expense', 16, 1, 377, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'fugiat ipsam ducimus', '2022-08-01T05:49:40.037Z', 'expense', 17, 1, 969, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'earum illum illum', '2022-08-20T04:06:28.250Z', 'expense', 18, 1, 542, NULL, NULL);
INSERT INTO transaction (id, name, dateCreated, transactionType, lenderId, lendeeId, amount, personId, groupId) VALUES (1, 'quo velit iste', '2022-12-05T18:07:33.248Z', 'expense', 19, 1, 822, NULL, NULL);