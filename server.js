const { destCity, originCity, interval, date } = require("./config");
const {
  logger,
  consoleLogger,
  telegramLogger,
  configs,
} = require("./services/loggers/logger.service");
const { fetchBuses } = require("./services/providers/fetch-buses.service");

setInterval(async () => {
  const today = await fetchBuses(originCity, destCity, date);

  const allLogs = logger([consoleLogger]);
  const onlyUniqueBusses = logger([telegramLogger], {
    filters: [configs.filters.onlyNotLoggedBusses],
  });

  allLogs(today.busses);
  onlyUniqueBusses(today.busses);
}, interval);
