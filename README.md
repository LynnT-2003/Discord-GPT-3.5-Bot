# Discord-GPT-Bot-3.5

A Discord chatbot that uses the OpenAI API to generate friendly responses based on user messages in a specific channel.

![App Screenshot](https://github.com/LynnT-2003/Discord-GPT-3.5-Bot/blob/main/img/its_online.png?raw=true)

## Installation and Setup

Clone this repository:

```bash
  git clone https://github.com/LynnT-2003/Discord-GPT-3.5-Bot.git
```

Navigate to the project's directory and install dependencies:

```bash
  cd Discord-GPT-3.5-Bot
```

```bash
  yarn install
```

Create a .env file in the project's root directory and add your Discord bot token, OpenAI API key, and your target Discord channel's ID:

```bash
  TOKEN=your_discord_bot_token
  API_KEY=your_openai_api_key
  CHANNEL_ID=target_channel_id
```

```bash
  API_KEY=your_openai_api_key
```

```bash
  CHANNEL_ID=target_channel_id
```

Run the bot:

```bash
  node index.js
```

## Usage

Once the bot is online, it will respond to messages sent in the specified channel. It will generate friendly responses based on the user messages and the conversation context.

Outdated response with old prompt:
![App Screenshot](https://github.com/LynnT-2003/Discord-GPT-3.5-Bot/blob/main/img/discord_screenshot.png?raw=true)

New response after updating prompt for more sentiment responses:
![App Screenshot](https://github.com/LynnT-2003/Discord-GPT-3.5-Bot/blob/main/img/screenshot.png)

Latest response after updating prompt for more a personal response:
![App Screenshot](https://github.com/LynnT-2003/Discord-GPT-3.5-Bot/blob/main/img/screenshot2.png)
