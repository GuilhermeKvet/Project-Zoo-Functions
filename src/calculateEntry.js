const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: entrants.filter((people) => people.age < 18).length,
    adult: entrants.filter((people) => people.age >= 18 && people.age < 50).length,
    senior: entrants.filter((people) => people.age >= 50).length,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (
    (child * data.prices.child)
    + (adult * data.prices.adult)
    + (senior * data.prices.senior)
  );
}

module.exports = { calculateEntry, countEntrants };
