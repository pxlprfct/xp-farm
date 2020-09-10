const { X, O, EMPTY } = require('./helpers/constants');

const makeMove = require('./helpers/makeMove');
const START_GAME_MESSAGE = require('./helpers/output/start_game');
const WINNING_GAME_MESSAGE = require('./helpers/output/winning_game');
const TURN_MESSAGE = require('./helpers/output/turn');
const DRAW_MESSAGE = require('./helpers/output/draw');
const isWinner = require('./helpers/isWinner');
const ableToMakeMove = require('./helpers/ableToMakeMove');

const togglePlayer = (player) => (player === X ? O : X);

const startGame = () => {
  const emptyBoard = Array.from(Array(3), () => new Array(3).fill(' '));

  console.log(START_GAME_MESSAGE(emptyBoard));

  return {
    currentBoard: emptyBoard,
    currentPlayer: X, // first turn is always 'X'
  };
};

const nextTurn = (state) => {
  const { currentBoard } = state;

  const [row, column] = makeMove();

  if (currentBoard[row][column] === EMPTY) {
    currentBoard[row][column] = state.currentPlayer;
  } else {
    nextTurn(state);
  }

  if (isWinner(currentBoard, state.currentPlayer)) {
    console.log(WINNING_GAME_MESSAGE(currentBoard, state.currentPlayer));
    return false;
  }

  if (!ableToMakeMove(currentBoard)) {
    console.log(DRAW_MESSAGE(currentBoard, state.currentPlayer));
    return false;
  }

  console.log(TURN_MESSAGE(currentBoard, state.currentPlayer));

  return {
    currentBoard,
    currentPlayer: togglePlayer(state.currentPlayer),
  };
};

module.exports = {
  startGame,
  nextTurn,
};
