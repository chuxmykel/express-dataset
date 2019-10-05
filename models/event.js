'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: DataTypes.STRING,
    actor_id: DataTypes.INTEGER,
    repo_id: DataTypes.INTEGER,
    created_at: DataTypes.STRING,
  }, { timestamps: false });
  Event.associate = function(models) {
    Event.belongsTo(models.Repo, {
      as: 'repo',
      foreignKey: 'repo_id',
    });
    Event.belongsTo(models.Actor, {
      as: 'actor',
      foreignKey: 'actor_id',
    });
  };
  return Event;
};