'use strict';
module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
  }, { timestamps: false });
  Repo.associate = function(models) {
    Repo.hasMany(models.Event, {
      foreignKey: 'repo_id',
      onDelete: 'CASCADE'
    });
  };
  return Repo;
};