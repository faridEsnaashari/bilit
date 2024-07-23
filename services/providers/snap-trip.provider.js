const { default: axios } = require("axios");

async function fetchBuses(from, to, date) {
  const result = await axios.get(
    `https://fp.snapptrip.com/bus-listing-go/v2/availability/${from}/to/${to}/on/${date}?filter=true`,
  );

  return result.data.solutions.map((s) => ({
    originTerminal: s.originTerminal?.name || "unknown",
    destTerminal: s.destinationTerminal?.name || "unknown",
    time: s.departureTime,
    date,
  }));
}

module.exports = fetchBuses;
