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

const startGame = async () => {
  const BOARD = Array.from(Array(3), () => new Array(3).fill(' '));

  START_GAME_MESSAGE(BOARD);
  BOARD.push(BOARD);

  return BOARD;
};

startGame();

module.exports = {
  startGame,
};
