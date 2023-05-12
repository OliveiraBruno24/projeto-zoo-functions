const data = require('../data/zoo_data');

// eslint-disable-next-line max-lines-per-function
const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  }
  // segunda versão, refatorada pós monitoria.
  return data.species.find((especie) => especie.name === animal.species)
    .residents.filter((bicho) => (animal.sex ? bicho.sex === animal.sex : true)).length;

  // comentando solução refatorada:

  // (animal.sex ? bicho.sex === animal.sex : true) --> checa se a o animal tem a consição sex definida como uma string
  // se tiver, verifica se bicho.sex bate com o sexo especificado, se bater ok, se não só segue o baile... Next.
  // o true ali era na intensão de "segue o baile" msm, mas testei e vi q se colocar 'pao' funciona igual... então só deixei.
  // isso me mostrou que a sensação de conhecimento é apenas um delirio coletivo da sociedade (|-_-|).
};
module.exports = countAnimals;
// --- primeira versão, modo paulada ---

// } if (animal.sex) {
//   console.log('aaa');
//   const sexoEspecifico = data.species.find((especie) => especie.name === animal.species);
//   return sexoEspecifico.residents.filter((bicho) => bicho.sex === animal.sex).length;
// } if (typeof (animal) === 'object') {
//   const findAnimal = data.species.find((especie) => especie.name === animal.species).residents;
//   return findAnimal.length;
// }

// const contaEspecie = filtraEspecie.find((especie) => especie.residents.length);
