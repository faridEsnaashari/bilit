const logger = require("../../../pino/pino");

async function log(data) {
  logger.info(data);
}

module.exports = log;
