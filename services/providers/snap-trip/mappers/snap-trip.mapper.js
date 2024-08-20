function mapper(data) {
  if (!data.solutions) {
    return { success: false, data: [] };
  }

  return {
    success: true,
    data: data.solutions.map((s) => ({
      originTerminal: s.originTerminal?.name || "unknown",
      destTerminal: s.destinationTerminal?.name || "unknown",
      time: s.departureTime,
      date: data.date,
    })),
  };
}

module.exports = mapper;
