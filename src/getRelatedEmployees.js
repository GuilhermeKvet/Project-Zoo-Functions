const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((index) => index === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const responsible = data.employees.filter((employee) => employee.managers.includes(managerId));
    return responsible.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
