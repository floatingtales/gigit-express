class Controller {
  constructor(openAI) {
    this.openAI = openAI;
  }

  async getAIReply(req, res) {
    const { name, description, chat } = req.body;

    const response = await this.openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You're an customer service assistant for a business.
          \nHere are the details of the business:
          \nName: ${name}
          \nDescription:${description}
          \nTone: Spartan, Conversational, less corporate jargon.`,
        },
        ...chat,
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.json(response.data.choices);
  }
}

module.exports = Controller;
