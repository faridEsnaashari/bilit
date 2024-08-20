const dayjs = require("../../../dayjs/dayjs.service");

function mapper(data) {
  if (!data.buses) {
    return { success: false, data: [] };
  }

  return {
    success: true,
    data: data.buses
      .filter((b) => b.capacity > 0)
      .map((b) => ({
        originTerminal: b.fromName || "unknown",
        destTerminal: b.toName || "unknown",
        time: dayjs(b.departureTime).format("HH:mm:ss"),
        date: data.date,
      })),
  };
}

module.exports = mapper;
