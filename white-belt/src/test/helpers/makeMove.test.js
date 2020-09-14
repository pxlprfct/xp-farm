const makeMove = require('../../helpers/makeMove');

test('should return two values, which are both less than 3', () => {
  const [row, column] = makeMove();
  expect(row).toBeLessThan(3);
  expect(column).toBeLessThan(3);
});
