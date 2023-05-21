const { Person } = require("../entities");

/**
 *
 * @param {any} faker
 * @param {() => number} nextId
 * @returns {Promise}
 */
function generateFriend(faker, nextId) {
  const friend = new Person({
    id: nextId(),
    name: faker.person.fullName(),
    isUser: false,
  });
  return friend;
}

module.exports = generateFriend;
