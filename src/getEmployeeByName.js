const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.find((employee) => {
    const verifyNames = employee.firstName === employeeName || employee.lastName === employeeName;
    return verifyNames;
  }) || {};
}

module.exports = getEmployeeByName;
