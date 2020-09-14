const renderBoard = require('./renderBoard');

const GAME_BOARD_CREATION = `Game Board Creation...`;
const BOARD_CREATED = `Board Created.`;
const START_WITH_PLAYER = `The game will start with player X`;

const START_GAME_MESSAGE = (board) => `
${GAME_BOARD_CREATION}
${renderBoard(board)}
\n
${BOARD_CREATED}
${START_WITH_PLAYER}`;

module.exports = START_GAME_MESSAGE;
