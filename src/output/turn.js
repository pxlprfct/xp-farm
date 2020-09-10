const renderBoard = require('./renderBoard');

const CURRENT_PLAYER = (player) => `Player ${player}:`;

const TURN_MESSAGE = (board, player) => `
${CURRENT_PLAYER(player)}
${renderBoard(board)}`;

module.exports = TURN_MESSAGE;
