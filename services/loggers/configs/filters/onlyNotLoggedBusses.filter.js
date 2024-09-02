const dayjs = require("../../../dayjs/dayjs.service");

let seenBusses = [];

function filter({ originTerminal, destTerminal, time, date, id }) {
  const key = `${originTerminal}:${destTerminal}:${time}:${date}:${id}`;

  memoryResetOn();

  if (getSeenBusFromMemory(key)) {
    return false;
  }

  setSeenBusFromMemory(key, 1 * 24 * 60 * 60);

  return true;
}

function getSeenBusFromMemory(key) {
  return seenBusses.find((b) => b.key === key);
}

function setSeenBusFromMemory(key, expiredAt) {
  seenBusses = [
    ...seenBusses,
    { createdAt: dayjs().valueOf(), expiredAt, key },
  ];
}

function memoryResetOn() {
  seenBusses = seenBusses.filter((b) => {
    return (
      dayjs(b.createdAt).add(b.expiredAt, "second").valueOf() >=
      dayjs().valueOf()
    );
  });
}

module.exports = {
  filter,
  getSeenBusFromMemory,
  setSeenBusFromMemory,
  memoryResetOn,
};
