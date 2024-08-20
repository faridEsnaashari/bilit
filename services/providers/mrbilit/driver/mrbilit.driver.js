const { default: axios } = require("axios");

async function fetchBuses(from, to, date) {
  try {
    const result = await axios.post(
      "https://bus.mrbilit.ir/api/GetBusServices",
      {
        from,
        to,
        date,
        includeClosed: true,
        includePromotions: true,
        loadFromDbOnUnavailability: true,
        includeUnderDevelopment: true,
      },
    );
    return result.data;
  } catch (err) {
    return null;
  }
}

module.exports = fetchBuses;
