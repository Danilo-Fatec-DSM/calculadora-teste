const { somar, subtrair, multiplicar } = require('../script');


test('Deve somar 2 + 3 e retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('Deve subtrair 10 - 4 e retornar 6', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('Deve multiplicar 5 * 5 e retornar 25', () => {
  expect(multiplicar(5, 5)).toBe(25);
});

test('Deve funcionar com números negativos', () => {
  expect(somar(-1, -1)).toBe(-2);
  expect(multiplicar(-2, 3)).toBe(-6);
});