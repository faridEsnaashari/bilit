const seen = [];
async function check() {
  try {
    const data = await axios.get(
      "https://fp.snapptrip.com/bus-listing-go/v2/availability/21310000/to/11320000/on/2024-08-09?filter=true"
    );
    data.data.solutions.map(async (s) => {
      if (s.capacity === 0) {
        return;
      }

      if (
        seen.find(
          (se) =>
            se ===
            (
              s.departureTime +
              s.provider +
              s.originTerminal.name +
              s.destinationTerminal.name +
              "یکشنبه"
            ).toString()
        )
      ) {
        return;
      }
      const text = `
${new Date().toLocaleTimeString()}
      ${s.originTerminal?.name} -> ${s.destinationTerminal?.name}
      ${s.departureTime}
پنجشنبه
https://pwa.snapptrip.com/bus/search?origin=21310000&originCity=%D8%AA%D9%87%D8%B1%D8%A7%D9%86&dest=11320000&destCity=%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86&date=2024-08-09&abroad=false
      `;
      const bilitsDiv = document.getElementById("bilits");
      bilitsDiv.innerHTML = "";
      const bilitP = document.createElement("p");
      bilitP.innerHTML = text;
      bilitsDiv.appendChild(bilitP);

      await axios.post(
        `https://api.telegram.org/bot1143862654:AAGhppoql_wjQzJ-SXCDS1ZA98lFLgbbvBQ/sendMessage?`,
        { chat_id: 58235922, text }
      );

      seen.push(
        (
          s.departureTime +
          s.provider +
          s.originTerminal.name +
          s.destinationTerminal.name +
          "یکشنبه"
        ).toString()
      );
    });

    const data2 = await axios.get(
      "https://fp.snapptrip.com/bus-listing-go/v2/availability/21310000/to/11320000/on/2024-08-10?filter=true"
    );
    data2.data.solutions.map(async (s) => {
      if (s.capacity === 0) {
        return;
      }

      const text = `
${new Date().toLocaleTimeString()}
      ${s.originTerminal?.name} -> ${s.destinationTerminal?.name}
      ${s.departureTime}
جمعه
https://pwa.snapptrip.com/bus/search?origin=21310000&originCity=%D8%AA%D9%87%D8%B1%D8%A7%D9%86&dest=11320000&destCity=%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86&date=2024-08-10&abroad=false
      `;
      const bilitsDiv = document.getElementById("bilits2");
      bilitsDiv.innerHTML = "";
      const bilitP = document.createElement("p");
      bilitP.innerHTML = text;
      bilitsDiv.appendChild(bilitP);

      if (
        seen.find(
          (se) =>
            se ===
            (
              s.departureTime +
              s.provider +
              s.originTerminal.name +
              s.destinationTerminal.name +
              "دوشنبه"
            ).toString()
        )
      ) {
        return;
      }
      await axios.post(
        `https://api.telegram.org/bot1143862654:AAGhppoql_wjQzJ-SXCDS1ZA98lFLgbbvBQ/sendMessage?`,
        { chat_id: 58235922, text }
      );

      seen.push(
        (
          s.departureTime +
          s.provider +
          s.originTerminal.name +
          s.destinationTerminal.name +
          "دوشنبه"
        ).toString()
      );
    });
  } catch (err) {
    console.log(err);
    const errorDiv = document.getElementById("error");
    errorDiv.innerHTML = err;
  }
}

setInterval(check, 10 * 1000);
check();
console.log("started");
