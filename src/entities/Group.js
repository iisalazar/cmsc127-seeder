const Person = require("./Person");

/**
 * @namespace entities
 * @typedef {Object} Group
 * @property {number} id
 * @property {string} name
 * @property {Date} dateCreated
 * @property {Array<Person>} members
 */
class Group {
  /**
   *
   * @param {{
   *   id: number,
   *   name: string,
   *  dateCreated: Date
   * }} group
   */
  constructor(group) {
    this.id = group.id;
    this.name = group.name;
    this.dateCreated = group.dateCreated;
    this.members = [];
  }

  /**
   * Add a person to the group
   * @param {Person} member
   */
  addMember(member) {
    this.members.push(member);
  }
}

module.exports = Group;
