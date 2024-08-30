const driver = require("./driver/telegram.driver");
const config = require("./config");
const mapper = require("./mappers/telegram.mapper");

function telegramLogger(texts) {
  const bot = driver(config.botSecret)(config.chatId);

  texts.forEach((t) => bot(t));
}

module.exports = { logger: telegramLogger, mapper };
