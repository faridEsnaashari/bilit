const dayjs = require("../../../dayjs/dayjs.service");

let seenBusses = [];

function filter(data) {
  const busses = data.busses.map((bus) => {
    const filteredBusses = bus.data.filter((b) =>
      filterBusses({ ...b, providerId: bus.id }),
    );

    return { ...bus, data: [...filteredBusses] };
  });

  return {
    ...data,
    busses,
  };
}

function filterBusses({
  originTerminal,
  destTerminal,
  time,
  date,
  providerId,
}) {
  const key = `${originTerminal}:${destTerminal}:${time}:${date}:${providerId}`;

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
  filterBusses,
  getSeenBusFromMemory,
  setSeenBusFromMemory,
  memoryResetOn,
};
