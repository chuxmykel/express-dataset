'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    login: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
  }, { timestamps: false });
  Actor.associate = function(models) {
    Actor.hasMany(models.Event, {
      foreignKey: 'actor_id',
      onDelete: 'CASCADE'
    });
  };
  return Actor;
};