const { startGame, nextTurn } = require('./index');

const makeMove = require('./makeMove');

jest.mock('./makeMove');

const { START_GAME } = require('./test/strings');

const {
  GAME_1_PLAYER_X_FIRST_MOVE,
  GAME_1_PLAYER_O_FIRST_MOVE,
  GAME_1_PLAYER_X_SECOND_MOVE,
  GAME_1_PLAYER_O_SECOND_MOVE,
  GAME_1_PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE,
} = require('./test/game1');

const {
  GAME_2_PLAYER_X_FIRST_MOVE,
  GAME_2_PLAYER_O_FIRST_MOVE,
  GAME_2_PLAYER_X_SECOND_MOVE,
  GAME_2_PLAYER_O_SECOND_MOVE,
  GAME_2_PLAYER_X_THIRD_MOVE,
  GAME_2_PLAYER_O_THIRD_MOVE_WON_WITH_HORIZONTAL_LINE,
} = require('./test/game2');

const {
  GAME_3_PLAYER_X_FIRST_MOVE,
  GAME_3_PLAYER_O_FIRST_MOVE,
  GAME_3_PLAYER_X_SECOND_MOVE,
  GAME_3_PLAYER_O_SECOND_MOVE,
  GAME_3_PLAYER_X_THIRD_MOVE_WON_WITH_DIAGONAL_LINE,
} = require('./test/game3');

const {
  GAME_4_PLAYER_X_FIRST_MOVE,
  GAME_4_PLAYER_O_FIRST_MOVE,
  GAME_4_PLAYER_X_SECOND_MOVE,
  GAME_4_PLAYER_O_SECOND_MOVE,
  GAME_4_PLAYER_X_THIRD_MOVE,
  GAME_4_PLAYER_O_THIRD_MOVE,
  GAME_4_PLAYER_X_FOURTH_MOVE,
  GAME_4_PLAYER_O_FOURTH_MOVE,
  GAME_4_PLAYER_X_FIFTH_MOVE_DRAW,
} = require('./test/game4');

describe(`Tic-tac-toe is a game for two players, 'X' and 'O', who take turns marking the spaces in an empty 3×3 grid`, () => {
  const mockConsole = jest.spyOn(global.console, 'log');
  let STATE;

  beforeEach(() => {
    mockConsole.mockClear();
    makeMove.mockClear();
  });

  describe(`Game 1`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_1_PLAYER_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the center square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_1_PLAYER_O_FIRST_MOVE);
    });

    test(`Player X's second move selects to left middle square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_1_PLAYER_X_SECOND_MOVE);
    });

    test(`Player O's second move selects to bottom right square`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_1_PLAYER_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom left square, and they win with 3 in a row!`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(
        GAME_1_PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE,
      );
    });
  });

  describe(`Game 2`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_2_PLAYER_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the center square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_2_PLAYER_O_FIRST_MOVE);
    });

    test(`Player X's second move selects to top right square`, () => {
      makeMove.mockImplementation(() => [0, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_2_PLAYER_X_SECOND_MOVE);
    });

    test(`Player O's second move selects to left middle square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_2_PLAYER_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom left square, and they win with 3 in a row!`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_2_PLAYER_X_THIRD_MOVE);
    });

    test(`Player X's third move selects the right middle square, and they win with 3 in a row!`, () => {
      makeMove.mockImplementation(() => [1, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(
        GAME_2_PLAYER_O_THIRD_MOVE_WON_WITH_HORIZONTAL_LINE,
      );
    });
  });

  describe(`Game 3`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_3_PLAYER_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the left center square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_3_PLAYER_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the middle square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_3_PLAYER_X_SECOND_MOVE);
    });

    test(`Player O's second move selects to bottom left square`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_3_PLAYER_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the bottom right square, and they win with 3 in a row!`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(
        GAME_3_PLAYER_X_THIRD_MOVE_WON_WITH_DIAGONAL_LINE,
      );
    });
  });

  describe(`Game 4`, () => {
    test(`A new game starts on an empty 3x3 grid`, () => {
      STATE = startGame();
      expect(mockConsole).toHaveBeenCalledWith(START_GAME);
    });

    test(`The first player is designated "X" and they select the top left square`, () => {
      makeMove.mockImplementation(() => [0, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_X_FIRST_MOVE);
    });

    test(`The second player is designated "O" and they select the left center square`, () => {
      makeMove.mockImplementation(() => [1, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_O_FIRST_MOVE);
    });

    test(`Player X's second move selects the top right square`, () => {
      makeMove.mockImplementation(() => [0, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_X_SECOND_MOVE);
    });

    test(`Player O's second move selects to middle square`, () => {
      makeMove.mockImplementation(() => [1, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_O_SECOND_MOVE);
    });

    test(`Player X's third move selects the middle right square`, () => {
      makeMove.mockImplementation(() => [1, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_X_THIRD_MOVE);
    });

    test(`Player O's third move selects the bottom right square`, () => {
      makeMove.mockImplementation(() => [2, 2]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_O_THIRD_MOVE);
    });

    test(`Player X's forth move selects the bottom left square`, () => {
      makeMove.mockImplementation(() => [2, 0]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_X_FOURTH_MOVE);
    });

    test(`Player O's fourth move selects the top middle square`, () => {
      makeMove.mockImplementation(() => [0, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_O_FOURTH_MOVE);
    });

    test(`Player X's third move selects the bottom middle square, and they win with 3 in a row!`, () => {
      makeMove.mockImplementation(() => [2, 1]);

      STATE = nextTurn(STATE);
      expect(mockConsole).toHaveBeenCalledWith(GAME_4_PLAYER_X_FIFTH_MOVE_DRAW);
    });
  });
});
