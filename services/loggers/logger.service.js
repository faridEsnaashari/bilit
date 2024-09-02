const telegramLogger = require("./telegram/telegram.logger");
const consoleLogger = require("./console/console.logger");
const configs = require("./configs/configs.service");

function logger(loggers, configs = {}) {
  return function (data) {
    let logs = [...data];

    if (configs.filters?.length > 0) {
      logs = configs.filters.reduce(
        (prev, filterFn) => prev.filter(filterFn),
        logs,
      );
    }

    loggers.forEach(({ logger, mapper }) => logger(mapper(logs)));
  };
}

module.exports = {
  logger,
  telegramLogger,
  consoleLogger,
  configs,
};
