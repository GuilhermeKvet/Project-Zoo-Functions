const data = require('../data/zoo_data');

const checkHour = (key) => {
  const { open, close } = data.hours[key];
  return `Open from ${open}am until ${close}pm`;
};

const arrayAnimals = (key) => data.species.filter((animal) =>
  animal.availability.includes(key)).map((specie) => specie.name);

const checkAnimals = (scheduleTarget) => data.species.map((specie) =>
  specie.name).includes(scheduleTarget);

const checkDay = (scheduleTarget) => Object.keys(data.hours).includes(scheduleTarget);

const allSchedule = () => {
  const keys = Object.keys(data.hours);
  return keys.reduce((acc, key) => {
    Object.assign(acc, {
      [key]: {
        officeHour: key === 'Monday' ? 'CLOSED' : checkHour(key),
        exhibition: key === 'Monday' ? 'The zoo will be closed!' : arrayAnimals(key),
      },
    });
    return acc;
  }, {});
};

const returnGetSchedule = (scheduleTarget) => ({
  [scheduleTarget]: {
    officeHour: scheduleTarget === 'Monday' ? 'CLOSED' : checkHour(scheduleTarget),
    exhibition: scheduleTarget === 'Monday'
      ? 'The zoo will be closed!' : arrayAnimals(scheduleTarget),
  },
});

function getSchedule(scheduleTarget) {
  if (!checkDay(scheduleTarget) && !checkAnimals(scheduleTarget)) {
    return allSchedule();
  }
  if (checkAnimals(scheduleTarget)) {
    const animalSchedule = data.species.find((specie) => specie.name === scheduleTarget);
    return animalSchedule.availability;
  }
  return returnGetSchedule(scheduleTarget);
}

module.exports = getSchedule;
