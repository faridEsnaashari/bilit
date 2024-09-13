const mapper = require("./telegram.mapper");

it("should return this", () => {
  const time = new Date().toLocaleTimeString();
  expect(
    mapper([
      {
        originTerminal: "fromTest",
        destTerminal: "toTest",
        time: "00:30:00",
        date: "2024-07-30",
        id: "TP1",
      },
      {
        originTerminal: "fromTest",
        destTerminal: "toTest",
        time: "00:30:00",
        date: "2024-07-30",
        id: "TP1",
      },
    ]),
  ).toEqual([
    "\n" +
      `      ${time}\n` +
      "      fromTest -> toTest\n" +
      "      00:30:00\n" +
      "      2024-07-30\n" +
      "      TP1\n" +
      "      ",
    "\n" +
      `      ${time}\n` +
      "      fromTest -> toTest\n" +
      "      00:30:00\n" +
      "      2024-07-30\n" +
      "      TP1\n" +
      "      ",
  ]);
});
