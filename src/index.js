const { startGame, nextTurn } = require('./tic-tac-toe');

const delay = require('./helpers/delay');

const autoStart = async () => {
  let currentState = startGame();

  await delay(2000);

  while (currentState) {
    await delay(2000);
    currentState = nextTurn(currentState);
  }
};

autoStart();
