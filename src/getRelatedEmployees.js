const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((pessoa) => pessoa.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) { // verificando se o parametro managerId existe em isManager, ou seja, é um gerente.
    return data.employees.filter((pessoas) => pessoas.managers.includes(managerId))
      .map((pessoas) => `${pessoas.firstName} ${pessoas.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
