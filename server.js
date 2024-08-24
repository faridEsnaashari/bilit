const { destCity, originCity, interval, date } = require("./config");
const log = require("./services/loggers/logger.service");
const { fetchBuses } = require("./services/providers/fetch-buses.service");

setInterval(async () => {
  const today = await fetchBuses(originCity, destCity, date);

  log(today);
}, interval);
