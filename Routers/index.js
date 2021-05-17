const { Router } = require("express");

const router = new Router();

const Highscore = require("../models/").highscore;

router.get("/", async (req, res) => {
  const score = await Highscore.findAll();

  console.log("These are the scores", score);
  //   res.status(200).send({ score });
});

router.post("/", async (req, res) => {
  const { score, player_name } = req.body;

  if (score === null) {
    return res.status(400).send({ message: "Score is empty!" });
  }
  if (player_name === null) {
    return res.status(400).send({ message: "Name is empty!" });
  }

  try {
    const response = await Highscore.create({
      player_name,
      score,
    });
    return res.status(200).send({ message: "Score added", response });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
