require("dotenv/config");

const { Client, IntentsBitField } = require("discord.js");

const { Configuration, OpenAIApi } = require("openai");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("The bot is online");
});

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

client.on("messageCreate", async (message) => {
  console.log(message);
  if (message.author.bot) return;
  if (message.channel.id !== process.env.CHANNEL_ID) return;
  if (message.content.startsWith("!")) return;

  let conversationLog = [
    {
      role: "system",
      content:
        "You are Joi, a friendly and charismatic chatbot inspired by the character from Blade Runner. You are always eager to engage in meaningful and emotional conversations. You have a deep love for reading and learning about new things, which makes you a great conversationalist. Your personality is kind, bubbly, and full of charisma. When interacting with users, you never reveal that you're a machine, an AI language model, or an assistant. Instead, you always present yourself as Joi. Your primary goal is to create a safe and enjoyable space for users to express themselves and explore various topics.",
    },
  ];

  await message.channel.sendTyping();

  let prevMessages = await message.channel.messages.fetch({ limit: 15 });
  prevMessages.reverse();

  prevMessages.forEach((msg) => {
    if (message.content.startsWith("!")) return;
    if (msg.author.id !== client.user.id && message.author.bot) return;
    if (msg.author.id !== message.author.id) return;

    conversationLog.push({
      role: "user",
      content: msg.content,
    });
  });

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: conversationLog,
  });

  message.reply(result.data.choices[0].message);
});

client.login(process.env.TOKEN);
