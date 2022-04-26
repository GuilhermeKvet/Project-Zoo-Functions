const data = require('../data/zoo_data');

const includeNameOption = (sorted, sex, array) => {
  let name;
  return array.map((animal) => {
    if (sex) {
      const sexFilter = animal.residents.filter((resident) => resident.sex === sex);
      name = sexFilter.map((specie) => specie.name);
    } else {
      name = animal.residents.map((resident) => resident.name);
    }
    const obj = {};
    obj[animal.name] = sorted ? name.sort() : name;
    return obj;
  });
};

const getAnimalLocation = (location, options = { includeNames: false }) => {
  let result;
  const arrayOfAnimals = data.species.filter((specie) => specie.location === location);
  if (options.includeNames === true) {
    result = includeNameOption(options.sorted, options.sex, arrayOfAnimals);
  } else {
    result = arrayOfAnimals.map((specie) => specie.name);
  }
  return result;
};

const getAnimalMap = (options) => ({
  NE: getAnimalLocation('NE', options),
  NW: getAnimalLocation('NW', options),
  SE: getAnimalLocation('SE', options),
  SW: getAnimalLocation('SW', options),
});

module.exports = getAnimalMap;
