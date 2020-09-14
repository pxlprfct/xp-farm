const { EMPTY } = require('./constants');

const ableToMakeMove = (board) => board.flat().some((value) => value === EMPTY);

module.exports = ableToMakeMove;
