const express = require("express");

const router = express.Router();

class Router {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.post(
      "/getAIReply",
      this.controller.getAIReply.bind(this.controller)
    );

    return router;
  }
}

module.exports = Router;
