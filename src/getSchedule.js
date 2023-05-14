const data = require('../data/zoo_data');

const infos = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
};

const informacoesGerais = (animalEscolhido) => {
  if (!animalEscolhido) {
    return infos;
  }
};

const animalValido = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs',
  'snakes', 'elephants', 'giraffes'];

const diaValido = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const checagenDeDados = (valor) => animalValido.includes(valor) || diaValido.includes(valor);

const informacoesDoDia = (dia) => {
  if (dia !== 'Monday') {
    const { officeHour, exhibition } = infos[dia];
    return {
      [dia]: {
        officeHour,
        exhibition,
      },
    };
  }
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
};

const getSchedule = (valor) => {
  if (!valor) {
    return informacoesGerais();
  }
  if (!checagenDeDados(valor)) {
    return informacoesGerais();
  }
  if (diaValido.includes(valor)) {
    return informacoesDoDia(valor);
  }

  return data.species.find((animal) => animal.name === valor)
    .availability;
};
module.exports = getSchedule;
