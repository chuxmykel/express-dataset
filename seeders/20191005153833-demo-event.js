'use strict';

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert('events', [
      {
        type: 'PushEvent',
        actor_id: 1,
        repo_id: 1,
        created_at: new Date()
      },
    ]),
  down: queryInterface => queryInterface.dropAllTables(),
};
