/**
 * @namespace Transaction
 * @typedef {Object} Transaction
 * @property {number} id
 * @property {string} name
 * @property {Date} dateCreated
 * @property {string} type
 * @property {number} lenderId
 * @property {number} lendeeId
 * @property {number} amount
 * @property {number | null} personId
 * @property {number | null} grpId
 */
class Transaction {
  constructor(transaction) {
    const {
      id,
      name,
      dateCreated,
      type,
      lenderId,
      lendeeId,
      amount,
      personId = null,
      grpId = null,
    } = transaction;
    Object.assign(this, {
      id,
      name,
      dateCreated,
      type,
      lenderId,
      lendeeId,
      amount,
      personId,
      grpId,
    });
  }
}

module.exports = Transaction;
