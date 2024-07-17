const { greet } = require('./app');

test('greet function returns correct greeting', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
  expect(greet('Bob')).toBe('Hello, Bob!');
});

test('greet function handles empty input', () => {
  expect(greet('')).toBe('Hello, !');
});
