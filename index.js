const express = require("express");
const corsMiddleWare = require("cors");

const App = express();

const bodyParser = express.json();
App.use(bodyParser);

const port = process.env.PORT || 4000;

const scoreRouter = require("./Routers/highscores");
const questionRouter = require("./Routers/questions");

App.use(corsMiddleWare());

App.use("/highscore", scoreRouter);
App.use("/question", questionRouter);

App.listen(port, () => console.log("Listening on port:", port));
