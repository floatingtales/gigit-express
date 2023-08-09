class WebhookController {
  async getAIReply(req, res) {
    let results;
    const { body } = req;
    return res.json("test");
  }
}

module.exports = WebhookController;
