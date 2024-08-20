const log = require("./services/loggers/logger.service");
const { fetchBuses } = require("./services/providers/fetch-buses.service");

setInterval(async () => {
  const today = await fetchBuses(11320000, 21310000, "2024-08-20");
  const tomorrow = await fetchBuses(21310000, 11320000, "2024-08-10");

  log(today);
  log(tomorrow);
}, 1000);
