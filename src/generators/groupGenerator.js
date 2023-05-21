const { Group } = require("../entities");

/**
 *
 * @param {any} faker
 * @param {() => number} nextId
 * @returns {Group}
 */
function generateGroup(faker, nextId) {
  const group = new Group({
    id: nextId(),
    name: faker.company.name(),
    dateCreated: faker.date.past(),
  });
  return group;
}

module.exports = generateGroup;
