'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img_url: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      answer_1: {
        type: Sequelize.STRING
      },
      answer_2: {
        type: Sequelize.STRING
      },
      answer_3: {
        type: Sequelize.STRING
      },
      answer_4: {
        type: Sequelize.STRING
      },
      correct_answer: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('questions');
  }
};