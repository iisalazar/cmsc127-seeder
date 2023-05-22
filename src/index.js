const { faker } = require("@faker-js/faker");
const fs = require("fs");
const {
  friendGenerator,
  groupGenerator,
  userGenerator,
  transactionGenerator,
} = require("./generators");
const queryBuilder = require("./queryBuilder");
const path = require("path");

/**
 *
 * @param {string} filename Filename of the file to write to, defaults to the current date to ISO string
 * @param {string} content Content of file, defaults to empty string
 */
function writeToFile(filename = new Date().toISOString(), content = "") {
  const outDir = "queries";
  fs.writeFileSync(path.join(__dirname, outDir, filename), content);
}

function main() {
  const FRIEND_COUNT = 10;
  const GROUP_COUNT = 3;
  const DB_NAME = "splitwise_clone";
  const user = userGenerator(
    { person: { fullName: () => "Test user's name" } },
    () => 1
  );
  /**
   * @type {Array<Friend>} friends
   */
  const friends = [];

  for (let i = 2; i < FRIEND_COUNT; i++) {
    const friend = friendGenerator(faker, () => i);
    friends.push(friend);
  }
  /**
   * @type {Array<Group>} groups
   */
  const groups = [];

  for (let i = 1; i <= GROUP_COUNT; i++) {
    const group = groupGenerator(faker, () => i);
    groups.push(group);
  }

  // add friends to groups

  const groupSize = Math.ceil(friends.length / 3);
  for (const group of groups) {
    // divide the friends into 3 groups
    const startIndex = groups.indexOf(group) * groupSize;
    const endIndex = startIndex + groupSize;
    const groupFriends = friends.slice(startIndex, endIndex);
    // add friends to group
    for (const friend of groupFriends) {
      group.addMember(friend);
    }
  }

  const statements = [];

  statements.push(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
  statements.push(`USE ${DB_NAME};`);

  // build insert statement for user
  const userStatement = queryBuilder.buildInsertStatement("person", user);
  statements.push(userStatement);

  // build insert statements for friends
  for (const element of friends) {
    const friend = element;
    const friendStatement = queryBuilder.buildInsertStatement("person", friend);
    statements.push(friendStatement);
  }

  // build insert statements for groups

  for (const element of groups) {
    const { members, ...group } = element;
    const groupStatement = queryBuilder.buildInsertStatement("grp", group);
    statements.push(groupStatement);
    // generate junction table

    for (const member of members) {
      const junctionStatement = queryBuilder.buildInsertStatement(
        "person_grp",
        {
          grpId: group.id,
          personId: member.id,
        }
      );
      statements.push(junctionStatement);
    }
  }

  // create transactions for user and friends

  const transactions = [];

  let lastTransactionId = 1;

  for (const friend of friends) {
    const transaction = transactionGenerator(faker, () => lastTransactionId, {
      lendeeId: user.id,
      lenderId: friend.id,
      personId: user.id,
      grpId: null,
      getTransactionType: () => "expense",
    });
    transactions.push(transaction);
    lastTransactionId++;
  }

  // create group transactions
  for (const group of groups) {
    for (const member of group.members) {
      const transaction = transactionGenerator(faker, () => lastTransactionId, {
        lendeeId: member.id,
        lenderId: user.id,
        personId: null,
        grpId: group.id,
        getTransactionType: () => "expense",
      });
      transactions.push(transaction);
      lastTransactionId++;
    }
  }

  // build insert statements for transactions
  for (const transaction of transactions) {
    const transactionStatement = queryBuilder.buildInsertStatement(
      "transaction",
      transaction
    );
    statements.push(transactionStatement);
  }

  writeToFile(`${new Date().toISOString()}.sql`, statements.join("\n"));
}

main();
