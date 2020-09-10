const makeMove = require('./makeMove');

const renderBoard = (board) => `
${board[0][0]}|${board[0][1]}|${board[0][2]}
-+-+-
${board[1][0]}|${board[1][1]}|${board[1][2]}
-+-+-
${board[2][0]}|${board[2][1]}|${board[2][2]}`;

const GAME_BOARD_CREATION = `Game Board Creation...`;
const BOARD_CREATED = `Board Created.`;
const START_WITH_PLAYER = `The game will start with player X`;

const START_GAME_MESSAGE = (BOARD) => {
  console.log(`
${GAME_BOARD_CREATION}
${renderBoard(BOARD)}
\n
${BOARD_CREATED}
${START_WITH_PLAYER}`);
};

const CURRENT_PLAYER = (player) => `Player ${player}:`;

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const togglePlayer = (player) => (player === PLAYER_X ? PLAYER_O : PLAYER_X);

const startGame = () => {
  const BOARD = Array.from(Array(3), () => new Array(3).fill(' '));

  START_GAME_MESSAGE(BOARD);

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
    console.log(`
${CURRENT_PLAYER(state.currentPlayer)}
${renderBoard(currentBoard)}

PLAYER X WON!`);
  } else {
    console.log(`
${CURRENT_PLAYER(state.currentPlayer)}
${renderBoard(currentBoard)}`);
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
