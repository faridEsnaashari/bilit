const logger = require("../../../pino/pino");

async function log(data) {
  logger(data);
}

module.exports = log;
