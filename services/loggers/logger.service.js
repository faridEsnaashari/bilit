const config = require("./telegram/config");
const getTelegramBot = require("./telegram/driver/telegram.driver");
const telegramMapper = require("./telegram/mappers/telegram.mapper");
const consoleDriver = require("./console/driver/console.driver");
const consoleMapper = require("./console/mappers/console.mapper");

function telegramLogger(texts) {
  const bot = getTelegramBot(config.botSecret)(config.chatId);

  texts.forEach((t) => bot(t));
}

const loggers = [
  { logger: consoleDriver, mapper: consoleMapper },
  { logger: telegramLogger, mapper: telegramMapper },
];

function log(data) {
  loggers.forEach((l) => l.logger(l.mapper(data)));
}

module.exports = log;
