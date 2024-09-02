const mapper = require("./telegram.mapper");

it("should return this", () => {
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
      `      ${new Date().toLocaleTimeString()}\n` +
      "      fromTest -> toTest\n" +
      "      00:30:00\n" +
      "      2024-07-30\n" +
      "      TP1\n" +
      "      ",
    "\n" +
      `      ${new Date().toLocaleTimeString()}\n` +
      "      fromTest -> toTest\n" +
      "      00:30:00\n" +
      "      2024-07-30\n" +
      "      TP1\n" +
      "      ",
  ]);
});
