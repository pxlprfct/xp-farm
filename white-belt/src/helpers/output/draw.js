const TURN_MESSAGE = require('./turn');

const DRAW_MESSAGE = (board, player) =>
  `${TURN_MESSAGE(board, player)}\n\nGAME ENDS WITH A DRAW!`;

module.exports = DRAW_MESSAGE;
