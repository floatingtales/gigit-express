const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const Controller = require("./controller/controller");
const Router = require("./router/router");

const app = express();

const controller = new Controller();
const router = new Router(controller).routes();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/", router);

app.get("*", (req, res) => {
  res.status(404).json({ status: 404 });
});

app.listen(PORT, () => {
  console.log("app is listening at port", PORT);
});
