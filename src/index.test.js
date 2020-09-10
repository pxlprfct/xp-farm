const mockConsole = jest.spyOn(global.console, 'log');

const { startGame } = require('./index');

describe(`Tic-tac-toe is a game for two players, 'X' and 'O', who take turns marking the spaces in an empty 3×3 grid`, () => {
  test(`A new game starts on an empty 3x3 grid`, () => {
    startGame();
    expect(mockConsole).toHaveBeenCalled();
  });
});
