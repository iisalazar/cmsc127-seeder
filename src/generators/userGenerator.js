const { Person } = require("../entities");

/**
 *
 * @param {any} faker
 * @param {() => number} nextId
 * @returns {Person}
 */
function generateUser(faker, nextId) {
  const user = new Person({
    id: nextId(),
    name: faker.person.fullName(),
    isUser: true,
  });
  return user;
}

module.exports = generateUser;
