const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }

  const getAnimal = data.species.find((specie) => specie.name === animal.specie);

  if (!animal.sex) {
    return getAnimal.residents.length;
  }
  return getAnimal.residents.filter((getSpecieSex) => getSpecieSex.sex === animal.sex).length;
}

module.exports = countAnimals;
