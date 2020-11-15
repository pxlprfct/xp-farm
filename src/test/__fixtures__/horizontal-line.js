const HORIZONTAL_LINE_X_FIRST_MOVE = `
Player X:

X| | 
-+-+-
 | | 
-+-+-
 | | `;

const HORIZONTAL_LINE_O_FIRST_MOVE = `
Player O:

X| | 
-+-+-
 |O| 
-+-+-
 | | `;

const HORIZONTAL_LINE_X_SECOND_MOVE = `
Player X:

X| |X
-+-+-
 |O| 
-+-+-
 | | `;

const HORIZONTAL_LINE_O_SECOND_MOVE = `
Player O:

X| |X
-+-+-
O|O| 
-+-+-
 | | `;

const HORIZONTAL_LINE_X_THIRD_MOVE = `
Player X:

X| |X
-+-+-
O|O| 
-+-+-
X| | `;

const HORIZONTAL_LINE_O_THIRD_MOVE_WIN = `
Player O:

X| |X
-+-+-
O|O|O
-+-+-
X| | 

PLAYER O WON!`;

module.exports = {
  HORIZONTAL_LINE_X_FIRST_MOVE,
  HORIZONTAL_LINE_O_FIRST_MOVE,
  HORIZONTAL_LINE_X_SECOND_MOVE,
  HORIZONTAL_LINE_O_SECOND_MOVE,
  HORIZONTAL_LINE_X_THIRD_MOVE,
  HORIZONTAL_LINE_O_THIRD_MOVE_WIN,
};
