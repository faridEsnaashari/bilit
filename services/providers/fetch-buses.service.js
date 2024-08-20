const snapFetchBuses = require("./snap-trip/driver/snap-trip.driver");
const mrBilitFetchBuses = require("./mrbilit/driver/mrbilit.driver");
const snapMapper = require("./snap-trip/mappers/snap-trip.mapper");
const mrBilitMapper = require("./mrbilit/mappers/mrbilit.mapper");

const createFetchBuses = (providers) => async (from, to, date) => {
  const results = await Promise.all(
    providers.map(async ({ fetchBuses, id, mapper }) => {
      const r = await fetchBuses(from, to, date);
      return {
        id,
        data: mapper({ ...r, date }),
      };
    }),
  );

  return {
    busses: results
      .filter((r) => r.data.success)
      .map((r) => ({ data: r.data.data, id: r.id })),
    errors: results
      .filter((r) => !r.data.success)
      .map((r) => ({ data: r.data.data, id: r.id })),
  };
};
const fetchBuses = createFetchBuses([
  { fetchBuses: snapFetchBuses, id: "SNAP_TRIP", mapper: snapMapper },
  { fetchBuses: mrBilitFetchBuses, id: "MR_BILIT", mapper: mrBilitMapper },
]);

module.exports = { fetchBuses, createFetchBuses };
