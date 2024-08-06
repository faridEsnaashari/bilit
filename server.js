const log = require("./services/loggers/logger.service");
const { fetchBuses } = require("./services/providers/fetch-buses.service");

setTimeout(async () => {
  const today = await fetchBuses(11320000, 21310000, "2024-08-07");
  const tomorrow = await fetchBuses(11320000, 21310000, "2024-08-08");

  log(today);
  log(tomorrow);
}, 10000);
