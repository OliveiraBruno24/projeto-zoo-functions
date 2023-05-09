const data = require('../data/zoo_data');

// const getEmployeeByName = data.employees.map((employeeName) => {
//   const colaboradores = {};
//   colaboradores.firstName = employeeName;
//   colaboradores.lastName = employeeName;
//   return colaboradores;
// });

const getEmployeeByName = (employeeName) => {
  const funcionario = data.employees.find((employee) => {
    const infos = employee.firstName === employeeName || employee.lastName === employeeName;
    return infos;
  });
  return funcionario || {};
};
module.exports = getEmployeeByName;
