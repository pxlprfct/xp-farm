const makeMove = require('./makeMove');
const START_GAME_MESSAGE = require('./output/start_game');
const WINNING_GAME_MESSAGE = require('./output/winning_game');
const TURN_MESSAGE = require('./output/turn');
// const DRAW_MESSAGE = require('./output/draw'); // for later!

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const togglePlayer = (player) => (player === PLAYER_X ? PLAYER_O : PLAYER_X);

const startGame = () => {
  const BOARD = Array.from(Array(3), () => new Array(3).fill(' '));

  console.log(START_GAME_MESSAGE(BOARD));

  return {
    currentBoard: BOARD,
    currentPlayer: PLAYER_X,
  };
};

const calculateWinner = (board, currentPlayer) => {
  const flatBoard = board.flat();

  const winningCombinations = [
    [0, 1, 2], // horizontal top row
    [3, 4, 5], // horizontal middle row
    [6, 7, 8], // horizontal bottom row
    [0, 3, 6], // vertical left column
    [1, 4, 7], // vertical middle column
    [2, 5, 8], // vertical right columns
    [0, 4, 8], // top left to bottom right diagonal
    [2, 4, 6], // top right to bottom left diagonal
  ];

  let hasWon = false;

  winningCombinations.map((combination) => {
    if (
      flatBoard[combination[0]] === currentPlayer &&
      flatBoard[combination[1]] === currentPlayer &&
      flatBoard[combination[2]] === currentPlayer
    ) {
      hasWon = true;
    }
  });

  return hasWon;
};

const nextTurn = (state) => {
  const { currentBoard } = state;

  const [row, column] = makeMove();

  calculateWinner(currentBoard);

  if (currentBoard[row][column] === ' ') {
    currentBoard[row][column] = state.currentPlayer;
  }

  if (calculateWinner(currentBoard, state.currentPlayer)) {
    console.log(WINNING_GAME_MESSAGE(currentBoard, state.currentPlayer));
  } else {
    console.log(TURN_MESSAGE(currentBoard, state.currentPlayer));
  }

  return {
    currentBoard,
    currentPlayer: togglePlayer(state.currentPlayer),
  };
};

module.exports = {
  startGame,
  nextTurn,
};
