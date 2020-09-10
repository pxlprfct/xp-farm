const renderBoard = require('./renderBoard');

const CURRENT_PLAYER = (player) => `Player ${player}:`;

const DRAW_MESSAGE = (board, player) => `
${CURRENT_PLAYER(player)}
${renderBoard(board)}

GAME ENDS WITH A DRAW!`;

module.exports = DRAW_MESSAGE;
