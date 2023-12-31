const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const openAIConfig = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openAI = new OpenAIApi(openAIConfig);

const Controller = require("./controller/controller");
const Router = require("./router/router");

const app = express();

const controller = new Controller(openAI);
const router = new Router(controller).routes();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", router);

app.get("*", (req, res) => {
  res.status(404).json({ status: 404 });
});

app.listen(PORT, () => {
  console.log("app is listening at port", PORT);
});
