function formater(data) {
  return {
    busses: data
      .filter((r) => r.data.success)
      .map((r) =>
        r.data.data.map((b) => ({
          originTerminal: r.data.success ? b.originTerminal : null,
          destTerminal: r.data.success ? b.destTerminal : null,
          time: r.data.success ? b.time : null,
          date: r.data.success ? b.date : null,
          id: r.id,
        })),
      )
      .flat(),
    errors: data.filter((r) => !r.data.success).map((r) => ({ id: r.id })),
  };
}

module.exports = formater;
