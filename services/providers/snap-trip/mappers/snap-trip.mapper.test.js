const mapper = require("./snap-trip.mapper");
const fetchBuses = require("../driver/snap-trip.driver");

test("success output structure: ", async () => {
  const result = await fetchBuses(11320000, 21310000, "2024-07-30");
  const data = mapper({ ...result, date: "2024-07-30" });

  if (data.success) {
    expect(data).toMatchObject({ success: true });
    expect(data.data.length).toBeGreaterThan(0);
  } else {
    expect(data).toEqual({ success: false, data: [] });
  }
}, 10000);
