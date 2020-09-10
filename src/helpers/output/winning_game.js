const TURN_MESSAGE = require('./turn');

const CURRENT_PLAYER_WON = (player) => `PLAYER ${player} WON!`;

const WINNING_GAME_MESSAGE = (board, player) =>
  `${TURN_MESSAGE(board, player)}\n\n${CURRENT_PLAYER_WON(player)}`;

module.exports = WINNING_GAME_MESSAGE;
