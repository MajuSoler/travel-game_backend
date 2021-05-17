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

module.exports = router;
