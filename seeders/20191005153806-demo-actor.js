'use strict';

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert('actors', [
      {
        login: 'dan133',
        avatar_url: 'https://avatars.com/2790311',
      },
    ]),
  down: queryInterface => queryInterface.dropAllTables(),
};
