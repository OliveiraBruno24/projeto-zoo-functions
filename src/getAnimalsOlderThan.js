const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((especies) => especies.name === animal);
  if (!species) {
    return false; // espécie não encontrada
  }
  return species.residents.every((bicho) => bicho.age >= age);
  // residents é um array de objetos que tem as infos dos animais da espécie passada.
};
// console.log(getAnimalsOlderThan('lions', 1));
module.exports = getAnimalsOlderThan;
