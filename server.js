const log = require("./services/loggers/logger.service");
const { fetchBuses } = require("./services/providers/fetch-buses.service");

setTimeout(async () => {
  const today = await fetchBuses(21310000, 11320000, "2024-08-09");
  const tomorrow = await fetchBuses(21310000, 11320000, "2024-08-10");

  log(today);
  log(tomorrow);
}, 10000);
