const data = require('../data/zoo_data');

// const pessoaColaboradora = (id) => data.employees.find((pessoa) => pessoa.id === id)
// .responsibleFor[0]; // aqui me retorna o id do primeiro anila q essa pessoa cuida.

// agora preciso pegar esse id que a função "pessoaColaboradora" me retorna e traser as informações desses animais

// depois, preciso achar o animal mais velho dentre esses filtrados.
// por último, preciso que retorne um array com as informações do mais velho.
// const achaAnimal = (valor) => data.species.filter((especie) => especie.id === pessoaColaboradora());

const getOldestFromFirstSpecies = (id) => {
  const responsavelPor = data.employees.find((pessoa) => pessoa.id === id)
    .responsibleFor[0];
  const achaAnimal = data.species.filter((especie) => especie.id === responsavelPor)[0].residents;
  const oMaisVelho = achaAnimal.reduce((idoso, curr) => {
    if (curr.age > idoso.age) {
      return curr;
    }
    return idoso;
  });
  const retornoEsperado = Object.values(oMaisVelho);
  return retornoEsperado;
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
