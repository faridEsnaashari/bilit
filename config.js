require("dotenv").config();

module.exports = {
  originCity: process.env.ORIGIN_CITY,
  destCity: process.env.DEST_CITY,
  interval: process.env.INTERVAL,
  date: process.env.DATE,
};
