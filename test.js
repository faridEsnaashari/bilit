function db() {
  return {
    birthDay: {
      y: 1378,
      m: 12,
      d: 18,
    },
  };
}

function dbMapper({ birthDay }) {
  return {
    birthDay: `${birthDay.y}-${birthDay.m}-${birthDay.d}`,
  };
}

function api() {
  return {
    birthDay: "1378/12/18",
  };
}

function apiMapper({ birthDay }) {
  return {
    birthDay: birthDay.split("/").join("-"),
  };
}

function fetchBirthDay(driver, mapper) {
  return mapper(driver());
}

//eslint-disable-next-line
console.log(fetchBirthDay(db, dbMapper));
//eslint-disable-next-line
console.log(fetchBirthDay(api, apiMapper));
