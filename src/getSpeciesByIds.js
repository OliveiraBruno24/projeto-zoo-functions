const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const trem = [];

  ids.forEach((elemento) => {
    const bucaAnimal = data.species.find((raca) => raca.id === elemento);
    if (bucaAnimal) {
      trem.push(bucaAnimal);
    }
  });
  return trem;
};

// de inicio temo um array vazio o "trem". Depois pegamos os parametros passados e iteramos para cada um deles com a condição
// de encontrar no array "species" uma raça que bata com a raça que passamos, quando essa condição for verdadeira, alimentamos o "trem" com ela.
// Se receber mais de um parametro, o find funciona para cada um deles. Como só queremos saber a espécie dos animais, n tem problema
// usar o find, msm q ele só pegue o 1º idem que de match.

module.exports = getSpeciesByIds;
