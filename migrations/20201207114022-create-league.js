'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Leagues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.INTEGER
      },
      standingId: {
        type: Sequelize.STRING
      },
      teams: {
        type: Sequelize.STRING
      },
      scorers: {
        type: Sequelize.STRING
      },
      players: {
        type: Sequelize.STRING
      },
      referees: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Leagues');
  }
};