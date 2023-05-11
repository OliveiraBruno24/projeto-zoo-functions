const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  } if (animal.sex) {
    console.log('aaa');
    const sexoEspecifico = data.species.find((especie) => especie.name === animal.species);
    return sexoEspecifico.residents.filter((bicho) => bicho.sex === animal.sex).length;
  } if (typeof (animal) === 'object') {
    const findAnimal = data.species.find((especie) => especie.name === animal.species).residents;
    return findAnimal.length;
  }
};
console.log(countAnimals({ species: 'bears', sex: 'male' }));
module.exports = countAnimals;

// const contaEspecie = filtraEspecie.find((especie) => especie.residents.length);
