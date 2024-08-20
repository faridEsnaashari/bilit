const { default: axios } = require("axios");

async function fetchBuses(from, to, date) {
  try {
    const result = await axios.get(
      `https://fp.snapptrip.com/bus-listing-go/v2/availability/${from}/to/${to}/on/${date}?filter=true`,
    );

    return result.data;
  } catch (err) {
    return null;
  }
}

module.exports = fetchBuses;
