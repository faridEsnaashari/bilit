function formater(data) {
  return {
    busses: data
      .filter((r) => r.data.success)
      .map((r) => ({ data: r.data.data, id: r.id })),
    errors: data
      .filter((r) => !r.data.success)
      .map((r) => ({ data: r.data.data, id: r.id })),
  };
}

module.exports = formater;
