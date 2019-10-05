'use strict';

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert('repos', [
      {
        name: 'chuxmykel/banka',
        url: 'https://github.com/chuxmykel/banka',
      },
    ]),
  down: queryInterface => queryInterface.dropAllTables(),
};
