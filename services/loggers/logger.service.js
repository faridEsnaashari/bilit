const config = require("./telegram/config");
const getTelegramBot = require("./telegram/driver/telegram.driver");
const telegramMapper = require("./telegram/mappers/telegram.mapper");

function telegramLogger(texts) {
  const bot = getTelegramBot(config.botSecret)(config.chatId);

  texts.forEach((t) => bot(t));
}

const loggers = [{ logger: telegramLogger, mapper: telegramMapper }];

function log(data) {
  loggers.forEach((l) => l.logger(l.mapper(data)));
}

module.exports = log;
