const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce(
  (acc, idade) => {
    if (idade.age < 18) {
      acc.child += 1;
    } else if (idade.age >= 18 && idade.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { adult: 0, child: 0, senior: 0 },
);

const calculateEntry = (entrants) => {
  if (entrants === undefined || !entrants.length) return 0;

  const { child: criancas, adult: adultos, senior: idosos } = countEntrants(entrants);
  const { child: precoCriancas, adult: precoAdultos, senior: precoIdosos } = data.prices;

  const lucros = {
    criancas: criancas * precoCriancas,
    adultos: adultos * precoAdultos,
    idosos: idosos * precoIdosos,
  };

  const somatorio = Object.values(lucros).reduce((acc, preco) => acc + preco, 0);
  return somatorio;
};
module.exports = { calculateEntry, countEntrants };
