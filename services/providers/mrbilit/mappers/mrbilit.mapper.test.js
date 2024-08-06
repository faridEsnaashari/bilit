const mapper = require("./mrbilit.mapper");

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

test("success output structure: ", async () => {
  const data = mapper({ ...mockData, date: "2024-07-30" });
  expect(data).toMatchObject({
    success: true,
    data: [
      {
        originTerminal: "fromTest",
        destTerminal: "toTest",
        time: "00:30:00",
        date: "2024-07-30",
      },
    ],
  });

  const data2 = mapper({ ...null, date: "2024-07-30" });
  expect(data2).toEqual({ success: false, data: [] });
}, 10000);
