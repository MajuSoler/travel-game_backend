const { Router } = require("express");

const router = new Router();

const Question = require("../models/").question;

router.get("/", async (req, res) => {
  const questions = await Question.findAll();
  const relevantData = questions.map((question) => {
    return question.dataValues;
  });
  res.status(200).send(relevantData);
});

router.post("/", async (req, res) => {
  const {
    answer_1,
    answer_2,
    answer_3,
    answer_4,
    correct_answer,
    question,
    img_url,
  } = req.body;
  if (
    !answer_1 ||
    !answer_2 ||
    !answer_3 ||
    !answer_4 ||
    !correct_answer ||
    !question ||
    !img_url
  ) {
    return res.status(400).send({ message: "Please fill in ALL the fields" });
  }
  try {
    const response = await Question.create({
      answer_1,
      answer_2,
      answer_3,
      answer_4,
      correct_answer,
      question,
      img_url,
    });
    return res.status(200).send({ message: "Question added!", response });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
