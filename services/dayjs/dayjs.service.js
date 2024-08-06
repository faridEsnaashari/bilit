const djs = require("dayjs");
const jalaliday = require("jalaliday");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const relativeTime = require("dayjs/plugin/relativeTime");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const weekday = require("dayjs/plugin/weekday");

djs.extend(utc);
djs.extend(timezone);
djs.extend(jalaliday);
djs.extend(relativeTime);
djs.extend(isSameOrBefore);
djs.extend(isSameOrAfter);
djs.extend(weekday);

djs.tz.setDefault(process.env.TZ);

module.exports = djs;
