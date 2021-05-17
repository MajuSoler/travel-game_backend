const express = require("express");

const App = express();

const port = 4000;

const scoreRouter = require("./Routers/index");

App.use("/highscore", scoreRouter);

App.listen(port, () => console.log("Listening on port:", port));