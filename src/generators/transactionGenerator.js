const { Transaction } = require("../entities");

/**
 *
 * @param {any} faker
 * @param {() => number} nextId
 * @param {{lenderId: number, lendeeId: number, personId: number, groupId: number, getTransactionType: () => string} | undefined} data
 * @returns {Transaction}
 */
function generateTransaction(
  faker,
  nextId,
  {
    lenderId,
    lendeeId,
    personId,
    groupId,
    getTransactionType = () =>
      faker.random.arrayElement(["expense", "payment"]),
  }
) {
  const transaction = new Transaction({
    id: nextId(),
    name: faker.lorem.words(),
    dateCreated: faker.date.past(),
    transactionType: getTransactionType(),
    lenderId,
    lendeeId,
    amount: faker.number.int({ min: 5, max: 1000 }),
    personId,
    groupId,
  });

  return transaction;
}

module.exports = generateTransaction;
