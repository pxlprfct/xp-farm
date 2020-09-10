const { startGame, nextTurn } = require('../tic-tac-toe');

const makeMove = require('../helpers/makeMove');

jest.mock('./../helpers/makeMove');

const { START_GAME } = require('./__fixtures__/start-game');

const {
  VERTICAL_LINE_X_FIRST_MOVE,
  VERTICAL_LINE_O_FIRST_MOVE,
  VERTICAL_LINE_X_SECOND_MOVE,
  VERTICAL_LINE_O_SECOND_MOVE,
  VERTICAL_LINE_X_THIRD_MOVE_WIN,
} = require('./__fixtures__/vertical-line');

const {
  HORIZONTAL_LINE_X_FIRST_MOVE,
  HORIZONTAL_LINE_O_FIRST_MOVE,
  HORIZONTAL_LINE_X_SECOND_MOVE,
  HORIZONTAL_LINE_O_SECOND_MOVE,
  HORIZONTAL_LINE_X_THIRD_MOVE,
  HORIZONTAL_LINE_O_THIRD_MOVE_WIN,
} = require('./__fixtures__/horizontal-line');

const {
  DIAGONAL_LINE_X_FIRST_MOVE,
  DIAGONAL_LINE_O_FIRST_MOVE,
  DIAGONAL_LINE_X_SECOND_MOVE,
  DIAGONAL_LINE_O_SECOND_MOVE,
  DIAGONAL_LINE_X_THIRD_MOVE_WIN,
} = require('./__fixtures__/diagonal-line');

const {
  DRAW_X_FIRST_MOVE,
  DRAW_O_FIRST_MOVE,
  DRAW_X_SECOND_MOVE,
  DRAW_O_SECOND_MOVE,
  DRAW_X_THIRD_MOVE,
  DRAW_O_THIRD_MOVE,
  DRAW_X_FOURTH_MOVE,
  DRAW_O_FOURTH_MOVE,
  DRAW_X_FIFTH_MOVE_DRAW,
} = require('./__fixtures__/draw');

describe(`Tic-tac-toe is a game for two players, 'X' and 'O', who take turns marking the spaces in an empty 3×3 grid`, () => {
  const mockConsole = jest.spyOn(global.console, 'log');
  let STATE;

  beforeEach(() => {
    mockConsole.mockClear();
    makeMove.mockClear();
  });

  describe(`A player can wins when they have a vertical line`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(VERTICAL_LINE_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the center square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(VERTICAL_LINE_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the left middle square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(VERTICAL_LINE_X_SECOND_MOVE);
    });

    test(`Player O's second move selects the bottom right square`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(VERTICAL_LINE_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom left square, and they win with a vertical line!`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(VERTICAL_LINE_X_THIRD_MOVE_WIN);
    });
  });

  describe(`A player can wins when they have a horizontal line`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(HORIZONTAL_LINE_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the center square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(HORIZONTAL_LINE_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the top right square`, () => {
      makeMove.mockImplementation(() => [0, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(HORIZONTAL_LINE_X_SECOND_MOVE);
    });

    test(`Player O's second move selects the left middle square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(HORIZONTAL_LINE_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom left square`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(HORIZONTAL_LINE_X_THIRD_MOVE);
    });

    test(`Player X's third move selects the right middle square, and they win with a horizontal line!`, () => {
      makeMove.mockImplementation(() => [1, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(
        HORIZONTAL_LINE_O_THIRD_MOVE_WIN,
      );
    });
  });

  describe(`A player can wins when they have a diagonal line`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DIAGONAL_LINE_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the left center square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DIAGONAL_LINE_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the middle square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DIAGONAL_LINE_X_SECOND_MOVE);
    });

    test(`Player O's second move selects the bottom left square`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DIAGONAL_LINE_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom right square, and they win with a diagonal line`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DIAGONAL_LINE_X_THIRD_MOVE_WIN);
    });
  });

  describe(`When there are no valid moves left - the game is a draw`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the left center square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the top right square`, () => {
      makeMove.mockImplementation(() => [0, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_X_SECOND_MOVE);
    });

    test(`Player O's second move selects the middle square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the middle right square`, () => {
      makeMove.mockImplementation(() => [1, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_X_THIRD_MOVE);
    });

    test(`Player O's third move selects the bottom right square`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_O_THIRD_MOVE);
    });

    test(`Player X's forth move selects the bottom left square`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_X_FOURTH_MOVE);
    });

    test(`Player O's fourth move selects the top middle square`, () => {
      makeMove.mockImplementation(() => [0, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_O_FOURTH_MOVE);
    });

    test(`Player X's third move selects the bottom middle square, and the game is a draw`, () => {
      makeMove.mockImplementation(() => [2, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(DRAW_X_FIFTH_MOVE_DRAW);
    });
  });
});
