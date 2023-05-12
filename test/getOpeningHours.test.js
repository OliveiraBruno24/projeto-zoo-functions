const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  // Condições de aberto ou fechado
  it('A função retorna "The zoo is closed", para segunda-feira as 8', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('A função retorna "The zoo is open", para terça-feira as 8 da manhã', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  // teste de caractéries de tarde ou manhã AM ou PM
  it('A função deve retornar um erro caso a abreviação esteja incorreta', () => {
    expect(() => {
      getOpeningHours('Friday', '08:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  // testes para horários válidos 0 a 12 e 0 a 59
  it('A função deve retornar um erro caso o valor passado para horas não estejam entre 0 e 12', () => {
    expect(() => {
      getOpeningHours('Monday', '16:00-PM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('A função deve retornar um erro caso o valor passado para minutos não estejam entre 0 e 59', () => {
    expect(() => {
      getOpeningHours('Monday', '09:60-PM');
    }).toThrow('The minutes must be between 0 and 59');
  });
  // testes de erro de digitação em caso de horário ou dia
  it('deve lançar uma exceção caso a hora esteja incorreta', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });

  it('A função deve retornar um aviso caso o valor passado para dia não seja válido', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });
  // --------------------------
  it('A função não deve retornar um objeto contendo todos os dias e horários do zoologico caso não receba nenhum parâmetro', () => {
    const espera = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const quandoRecebe = getOpeningHours();
    expect(quandoRecebe).toEqual(espera);
  });

//   it('Deve lançar um erro para o horário inválido', () => {
//     expect(() => {
//       getOpeningHours('Tuesday', '20:00');
//     }).toThrow('Invalid time');
//   });
});
