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
  const user = userGenerator(
    { person: { fullName: () => "Test user's name" } },
    () => 1
  );
  /**
   * @type {Array<Friend>} friends
   */
  const friends = [];

  for (let i = 2; i < 20; i++) {
    const friend = friendGenerator(faker, () => i);
    friends.push(friend);
  }
  /**
   * @type {Array<Group>} groups
   */
  const groups = [];

  for (let i = 0; i < 3; i++) {
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
    const groupStatement = queryBuilder.buildInsertStatement("group", group);
    statements.push(groupStatement);
    // generate junction table

    for (const member of members) {
      const junctionStatement = queryBuilder.buildInsertStatement(
        "group_member",
        {
          group_id: group.id,
          member_id: member.id,
        }
      );
      statements.push(junctionStatement);
    }
  }

  // create transactions for user and friends

  const transactions = [];
  transactions.push(
    transactionGenerator(faker, () => 1, {
      lendeeId: user.id,
      lenderId: null,
      personId: null,
      groupId: null,
      getTransactionType: () => "payment",
    })
  );

  for (const friend of friends) {
    const transaction = transactionGenerator(faker, () => 1, {
      lendeeId: user.id,
      lenderId: friend.id,
      personId: null,
      groupId: null,
      getTransactionType: () => "expense",
    });
    transactions.push(transaction);
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
