function mapper(data) {
  return data
    .map(
      (b) =>
        `
      ${new Date().toLocaleTimeString()}
      ${b.originTerminal} -> ${b.destTerminal}
      ${b.time}
      ${b.date}
      ${b.id}
      `,
    )
    .flat();
}

module.exports = mapper;
