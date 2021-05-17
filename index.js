const express = require("express");

const App = express();

const bodyParser = express.json();
App.use(bodyParser);

const port = 4000;

const scoreRouter = require("./Routers/highscores");
const questionRouter = require("./Routers/questions");

App.use("/highscore", scoreRouter);
App.use("/question", questionRouter);

App.listen(port, () => console.log("Listening on port:", port));
