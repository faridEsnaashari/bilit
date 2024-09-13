const driver = require("./driver/telegram.driver");
const config = require("./config");
const mapper = require("./mappers/telegram.mapper");

async function telegramLogger(texts) {
  const bot = driver(config.botSecret)(config.chatId);

  for (let text in texts) {
    await bot(text);
  }
}

module.exports = { logger: telegramLogger, mapper };
