const { Router } = require("express");

const router = new Router();

const Highscore = require("../models/").highscore;

router.get("/", async (req, res) => {
  const score = await Highscore.findAll();

  console.log("These are the scores", score);
  //   res.status(200).send({ score });
});

module.exports = router;
