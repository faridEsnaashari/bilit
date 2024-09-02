const formater = require("./left-right-bus-error.formater");

it("should return by left and right", () => {
  const mock = [
    {
      id: "TP3",
      data: { success: false, data: [] },
    },
    {
      id: "TP2",
      data: {
        success: true,
        data: [
          {
            originTerminal: "fromTest",
            destTerminal: "toTest",
            time: "00:30:00",
            date: "2024-07-30",
          },
        ],
      },
    },
    {
      id: "TP1",
      data: {
        success: true,
        data: [
          {
            originTerminal: "fromTest",
            destTerminal: "toTest",
            time: "00:30:00",
            date: "2024-07-30",
          },
          {
            originTerminal: "fromTest",
            destTerminal: "toTest",
            time: "00:40:00",
            date: "2024-07-30",
          },
        ],
      },
    },
  ];
  expect(formater(mock)).toEqual({
    errors: [{ id: "TP3" }],
    busses: [
      {
        originTerminal: "fromTest",
        destTerminal: "toTest",
        time: "00:30:00",
        date: "2024-07-30",
        id: "TP2",
      },
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
        time: "00:40:00",
        date: "2024-07-30",
        id: "TP1",
      },
    ],
  });
});
