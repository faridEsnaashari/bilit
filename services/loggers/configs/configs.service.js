const onlyNotLoggedBusses = require("./filters/onlyNotLoggedBusses.filter");

module.exports = {
  filters: { onlyNotLoggedBusses: onlyNotLoggedBusses.filter },
};
