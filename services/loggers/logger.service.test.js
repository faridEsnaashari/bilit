const { logger, configs } = require("./logger.service");

let logs = [];

const mock1 = [
  {
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "id2",
  },
  {
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "id1",
  },
];

const mock2 = [
  {
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:50:00",
    date: "2024-07-30",
    id: "id2",
  },
  {
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "id1",
  },
  {
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:40:00",
    date: "2024-07-30",
    id: "id1",
  },
];

it("should apply filter configs", () => {
  const log = logger(
    [{ logger: (data) => logs.push(data), mapper: (data) => data }],
    { filters: [configs.filters.onlyNotLoggedBusses] },
  );

  log(mock1);
  log(mock2);

  expect(logs[1]).toEqual([
    {
      originTerminal: "fromTest",
      destTerminal: "toTest",
      time: "00:50:00",
      date: "2024-07-30",
      id: "id2",
    },
    {
      originTerminal: "fromTest",
      destTerminal: "toTest",
      time: "00:40:00",
      date: "2024-07-30",
      id: "id1",
    },
  ]);
});

let logs1 = [];
it("should return all data", () => {
  const log = logger([
    { logger: (data) => logs1.push(data), mapper: (data) => data },
  ]);

  log(mock1);
  log(mock2);

  expect(logs1[1]).toEqual([
    {
      originTerminal: "fromTest",
      destTerminal: "toTest",
      time: "00:50:00",
      date: "2024-07-30",
      id: "id2",
    },
    {
      originTerminal: "fromTest",
      destTerminal: "toTest",
      time: "00:30:00",
      date: "2024-07-30",
      id: "id1",
    },
    {
      originTerminal: "fromTest",
      destTerminal: "toTest",
      time: "00:40:00",
      date: "2024-07-30",
      id: "id1",
    },
  ]);
});
