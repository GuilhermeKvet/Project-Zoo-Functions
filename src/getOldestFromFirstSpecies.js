const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getId = data.employees.find((employee) => employee.id === id);
  const firstAnimal = getId.responsibleFor[0];
  const getAnimal = data.species.find((animals) => animals.id === firstAnimal);
  const oldestAnimal = getAnimal.residents.reduce((acc, oldAnimal) =>
    (acc.age > oldAnimal.age ? acc : oldAnimal));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
