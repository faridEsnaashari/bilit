const snapFetchBuses = require("./snap-trip.provider");

const createFetchBuses = (providers) => (from, to, date) =>
  providers.map(async ({ fetchBuses, id }) => ({
    id,
    busses: await fetchBuses(from, to, date),
  }));

const fetchBuses = createFetchBuses([
  { fetchBuses: snapFetchBuses, id: "SNAP_TRIP" },
]);

module.exports = fetchBuses;
