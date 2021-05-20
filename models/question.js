'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  question.init({
    img_url: DataTypes.STRING,
    question: DataTypes.STRING,
    answer_1: DataTypes.STRING,
    answer_2: DataTypes.STRING,
    answer_3: DataTypes.STRING,
    answer_4: DataTypes.STRING,
    correct_answer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};