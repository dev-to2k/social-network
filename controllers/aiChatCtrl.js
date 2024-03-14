const { openai } = require("../server");

const aiChatCtrl = {
  aiChat: async (req, res) => {
    try {
      const { text, activeChatId } = req.body;
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant and a friendly wise friend.",
          },
          { role: "user", content: `${text}` },
        ],
        model: "gpt-3.5-turbo",
      });
      return res
        .status(200)
        .json({ completion: completion.choices[0].message.content });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = aiChatCtrl;
