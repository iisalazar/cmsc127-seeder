/**
 * @namespace Transaction
 * @typedef {Object} Transaction
 * @property {number} id
 * @property {string} name
 * @property {Date} dateCreated
 * @property {string} transactionType
 * @property {number} lenderId
 * @property {number} lendeeId
 * @property {number} amount
 * @property {number | null} personId
 * @property {number | null} groupId
 */
class Transaction {
  constructor(transaction) {
    const {
      id,
      name,
      dateCreated,
      transactionType,
      lenderId,
      lendeeId,
      amount,
      personId = null,
      groupId = null,
    } = transaction;
    Object.assign(this, {
      id,
      name,
      dateCreated,
      transactionType,
      lenderId,
      lendeeId,
      amount,
      personId,
      groupId,
    });
  }
}

module.exports = Transaction;
