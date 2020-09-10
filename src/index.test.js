const { startGame, nextTurn } = require('./index');

const makeMove = require('./makeMove');

jest.mock('./makeMove');

const {
  START_GAME,
  PLAYER_X_FIRST_MOVE,
  PLAYER_O_FIRST_MOVE,
  PLAYER_X_SECOND_MOVE,
  PLAYER_O_SECOND_MOVE,
  PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE,
} = require('./test/strings');

describe(`Tic-tac-toe is a game for two players, 'X' and 'O', who take turns marking the spaces in an empty 3×3 grid`, () => {
  const mockConsole = jest.spyOn(global.console, 'log');
  let STATE;

  beforeEach(() => {
    mockConsole.mockClear();
    makeMove.mockClear();
  });

  test(`A new game starts on an empty 3x3 grid`, () => {
    STATE = startGame();
    expect(mockConsole).toHaveBeenCalledWith(START_GAME);
  });

  test(`The first player is designated "X" and they select the top left square`, () => {
    makeMove.mockImplementation(() => [0, 0]);

    STATE = nextTurn(STATE);
    expect(mockConsole).toHaveBeenCalledWith(PLAYER_X_FIRST_MOVE);
  });

  test(`The second player is designated "O" and they select the center square`, () => {
    makeMove.mockImplementation(() => [1, 1]);

    STATE = nextTurn(STATE);
    expect(mockConsole).toHaveBeenCalledWith(PLAYER_O_FIRST_MOVE);
  });

  test(`Player X's second move selects to left middle square`, () => {
    makeMove.mockImplementation(() => [1, 0]);

    STATE = nextTurn(STATE);
    expect(mockConsole).toHaveBeenCalledWith(PLAYER_X_SECOND_MOVE);
  });

  test(`Player O's second move selects to bottom right square`, () => {
    makeMove.mockImplementation(() => [2, 2]);

    STATE = nextTurn(STATE);
    expect(mockConsole).toHaveBeenCalledWith(PLAYER_O_SECOND_MOVE);
  });

  test(`Player X's third move selects the bottom left square, and they win with 3 in a row!`, () => {
    makeMove.mockImplementation(() => [2, 0]);

    STATE = nextTurn(STATE);
    expect(mockConsole).toHaveBeenCalledWith(
      PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE,
    );
  });
});
