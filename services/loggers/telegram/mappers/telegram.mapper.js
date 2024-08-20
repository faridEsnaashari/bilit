function mapper(data) {
  return data.busses
    .map(({ data, id }) =>
      data.map(
        (b) => `
      ${new Date().toLocaleTimeString()}
      ${b.originTerminal} -> ${b.destTerminal}
      ${b.time}
      ${b.date}
      ${id}
      `,
      ),
    )
    .flat();
}

module.exports = mapper;
