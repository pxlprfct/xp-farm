const { startGame, nextTurn } = require('./tic-tac-toe');

const delay = require('./helpers/delay');

const autoStart = async () => {
  let currentState = startGame();

  while (currentState) {
    // eslint-disable-next-line no-await-in-loop
    await delay(2000);
    currentState = nextTurn(currentState);
  }
};

autoStart();
