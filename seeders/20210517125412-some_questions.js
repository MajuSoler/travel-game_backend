"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          img_url: "https://source.unsplash.com/1600x900/?",
          question: "This is cool question",
          answer_1: "Option 1",
          answer_2: "Option 2",
          answer_3: "Option 3",
          answer_4: "Option 4",
          correct_answer: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url: "https://source.unsplash.com/1600x900/?",
          question: "This is another cool question",
          answer_1: "Option 1",
          answer_2: "Option 2",
          answer_3: "Option 3",
          answer_4: "Option 4",
          correct_answer: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url: "https://source.unsplash.com/1600x900/?",
          question: "This is yet another cool question",
          answer_1: "Option 1",
          answer_2: "Option 2",
          answer_3: "Option 3",
          answer_4: "Option 4",
          correct_answer: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img_url: "https://source.unsplash.com/1600x900/?",
          question: "This is  yet another cool question",
          answer_1: "Option 1",
          answer_2: "Option 2",
          answer_3: "Option 3",
          answer_4: "Option 4",
          correct_answer: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions", null, {});
  },
};
