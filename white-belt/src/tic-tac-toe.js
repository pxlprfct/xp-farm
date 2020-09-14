const { X, O, EMPTY } = require('./helpers/constants');
const makeMove = require('./helpers/makeMove');
const isWinner = require('./helpers/isWinner');
const ableToMakeMove = require('./helpers/ableToMakeMove');
const START_GAME_MESSAGE = require('./helpers/output/start_game');
const WINNING_GAME_MESSAGE = require('./helpers/output/winning_game');
const TURN_MESSAGE = require('./helpers/output/turn');
const DRAW_MESSAGE = require('./helpers/output/draw');

const togglePlayer = (player) => (player === X ? O : X);

const startGame = () => {
  const emptyBoard = Array.from(Array(3), () => new Array(3).fill(EMPTY));

  console.log(START_GAME_MESSAGE(emptyBoard));

  return {
    currentBoard: emptyBoard,
    currentPlayer: X, // first turn is always 'X'
  };
};

const nextTurn = (state) => {
  const { currentBoard, currentPlayer } = state;

  const [row, column] = makeMove();

  if (currentBoard[row][column] === EMPTY) {
    currentBoard[row][column] = currentPlayer;
  } else {
    nextTurn(state);
  }

  if (isWinner(currentBoard, currentPlayer)) {
    console.log(WINNING_GAME_MESSAGE(currentBoard, currentPlayer));
    return false;
  }

  if (!ableToMakeMove(currentBoard)) {
    console.log(DRAW_MESSAGE(currentBoard, currentPlayer));
    return false;
  }

  console.log(TURN_MESSAGE(currentBoard, currentPlayer));

  return {
    currentBoard,
    currentPlayer: togglePlayer(currentPlayer),
  };
};

module.exports = {
  startGame,
  nextTurn,
};
