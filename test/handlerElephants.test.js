const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('A função retorna "undefined" caso não receba nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('"count" retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('"name" um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('"averageAge" retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('"location" retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('"popularity" retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('"availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('A função retorna "null" caso receba parâmetros inválidos', () => {
    expect(handlerElephants('trem')).toEqual(null);
  });
  it('A função retorna "Parâmetro inválido, é necessário uma string" caso não receba uma string como parâmetro', () => {
    expect(handlerElephants(2)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
