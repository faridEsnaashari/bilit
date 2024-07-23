const { default: axios } = require("axios");

async function fetchBuses(from, to, date) {
  const result = await axios.post("https://bus.mrbilit.ir/api/GetBusServices", {
    from,
    to,
    date,
    includeClosed: true,
    includePromotions: true,
    loadFromDbOnUnavailability: true,
    includeUnderDevelopment: true,
  });
  console.log(result.data);

  return result.data.solutions.map((s) => ({
    originTerminal: s.originTerminal?.name || "unknown",
    destTerminal: s.destinationTerminal?.name || "unknown",
    time: s.departureTime,
    date,
  }));
}

fetchBuses(11320000, 21310000, "2024-07-15");

module.exports = fetchBuses;
