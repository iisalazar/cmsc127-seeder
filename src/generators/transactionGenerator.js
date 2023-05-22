const { Transaction } = require("../entities");

/**
 *
 * @param {any} faker
 * @param {() => number} nextId
 * @param {{lenderId: number, lendeeId: number, personId: number, grpId: number, getTransactionType: () => string} | undefined} data
 * @returns {Transaction}
 */
function generateTransaction(
  faker,
  nextId,
  {
    lenderId,
    lendeeId,
    personId,
    grpId,
    getTransactionType = () =>
      faker.random.arrayElement(["expense", "payment"]),
  }
) {
  const transaction = new Transaction({
    id: nextId(),
    name: faker.lorem.words(),
    dateCreated: faker.date.between({ from: "2022-01-01", to: new Date() }),
    type: getTransactionType(),
    lenderId,
    lendeeId,
    amount: faker.number.int({ min: 5, max: 1000 }),
    personId,
    grpId,
  });

  return transaction;
}

module.exports = generateTransaction;
