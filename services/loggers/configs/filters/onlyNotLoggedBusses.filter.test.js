const {
  setSeenBusFromMemory,
  getSeenBusFromMemory,
  memoryResetOn,
  filter,
} = require("./onlyNotLoggedBusses.filter");

it("should set and get a key", () => {
  setSeenBusFromMemory("this:is:for:test", 5);
  setSeenBusFromMemory("this:is:for:test2", 7);
  const { key, expiredAt, createdAt } =
    getSeenBusFromMemory("this:is:for:test");

  expect({ key, expiredAt }).toEqual({
    key: "this:is:for:test",
    expiredAt: 5,
  });
  expect(typeof createdAt).toBe("number");
});

it("should reset memeory", async () => {
  await new Promise((res) => {
    setTimeout(() => {
      memoryResetOn();

      const bus = getSeenBusFromMemory("this:is:for:test");
      expect(bus).toBeFalsy();

      const bus2 = getSeenBusFromMemory("this:is:for:test2");
      expect(bus2?.key).toBe("this:is:for:test2");
      res();
    }, 6000);
  });
}, 7000);

it("should filter seend busses", () => {
  const t1 = filter({
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "TP1",
  });

  const t2 = filter({
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "TP2",
  });

  const t3 = filter({
    originTerminal: "fromTest",
    destTerminal: "toTest",
    time: "00:30:00",
    date: "2024-07-30",
    id: "TP2",
  });

  expect(t1).toBeTruthy();
  expect(t2).toBeTruthy();
  expect(t3).toBeFalsy();
});
