const { createFetchBuses } = require("./fetch-buses.service");
const mrbilitMapper = require("./mrbilit/mappers/mrbilit.mapper");
const snapMapper = require("./snap-trip/mappers/snap-trip.mapper");

const mockData = {
  buses: [
    {
      capacity: 0,
      fromName: "fromTest",
      toName: "toTest",
      departureTime: "2024-07-27T00:30:00",
    },
    {
      capacity: 1,
      fromName: "fromTest",
      toName: "toTest",
      departureTime: "2024-07-27T00:30:00",
    },
  ],
};

test("currect return value", async () => {
  const fetchBuses = createFetchBuses([
    {
      mapper: mrbilitMapper,
      id: "TP1",
      fetchBuses: () => mockData,
    },
    {
      mapper: snapMapper,
      id: "TP2",
      fetchBuses: () => null,
    },
  ]);

  expect(await fetchBuses(11320000, 21310000, "2024-07-30")).toEqual({
    busses: [
      {
        originTerminal: "fromTest",
        destTerminal: "toTest",
        time: "00:30:00",
        date: "2024-07-30",
        id: "TP1",
      },
    ],
    errors: [{ id: "TP2" }],
  });
});
