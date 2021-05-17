"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "highscores",
      [
        {
          player_name: "ASH",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          player_name: "POW",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          player_name: "MJS",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("highscores", null, {});
  },
};
