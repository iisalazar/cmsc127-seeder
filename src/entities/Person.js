/**
 * @namespace Person
 * @typedef {Object} Person
 * @property {number} id
 * @property {string} name
 * @property {boolean} isUser
 */
class Person {
  /**
   *
   * @param {{
   *  id: number,
   *  name: string,
   *  isUser: boolean
   * }} person
   */
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.isUser = person.isUser;
  }
}

module.exports = Person;
