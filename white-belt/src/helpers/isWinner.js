const { WINNING_COMBINATIONS } = require('./constants');

const isWinner = (board, currentPlayer) => {
  const flatBoard = board.flat();

  let hasWon = false;

  WINNING_COMBINATIONS.map((combination) => {
    if (
      flatBoard[combination[0]] === currentPlayer &&
      flatBoard[combination[1]] === currentPlayer &&
      flatBoard[combination[2]] === currentPlayer
    ) {
      hasWon = true;
    }
    return false;
  });

  return hasWon;
};

module.exports = isWinner;
