const renderBoard = require('./renderBoard');

const CURRENT_PLAYER = (player) => `Player ${player}:`;
const CURRENT_PLAYER_WON = (player) => `PLAYER ${player} WON!`;

const WINNING_GAME_MESSAGE = (board, player) => `
${CURRENT_PLAYER(player)}
${renderBoard(board)}

${CURRENT_PLAYER_WON(player)}`;

module.exports = WINNING_GAME_MESSAGE;
