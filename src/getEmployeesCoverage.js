const data = require('../data/zoo_data');

const allEmployees = () => data.employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((specieId) =>
    data.species.find((specie) => specie.id === specieId).name),
  locations: employee.responsibleFor.map((specieId) =>
    data.species.find((specie) => specie.id === specieId).location),
}));

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return allEmployees();
  }
  const { name, id } = obj;
  const getEmployee = data.employees.find((employee) =>
    name === employee.firstName || name === employee.lastName || id === employee.id);
  if (!getEmployee) {
    throw new Error('Informações inválidas');
  }
  const roof = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: getEmployee.responsibleFor.map((specieId) =>
      data.species.find((specie) => specie.id === specieId).name),
    locations: getEmployee.responsibleFor.map((specieId) =>
      data.species.find((specie) => specie.id === specieId).location),
  };
  return roof;
}

module.exports = getEmployeesCoverage;
