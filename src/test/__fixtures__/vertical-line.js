const VERTICAL_LINE_X_FIRST_MOVE = `
Player X:

X| | 
-+-+-
 | | 
-+-+-
 | | `;

const VERTICAL_LINE_O_FIRST_MOVE = `
Player O:

X| | 
-+-+-
 |O| 
-+-+-
 | | `;

const VERTICAL_LINE_X_SECOND_MOVE = `
Player X:

X| | 
-+-+-
X|O| 
-+-+-
 | | `;

const VERTICAL_LINE_O_SECOND_MOVE = `
Player O:

X| | 
-+-+-
X|O| 
-+-+-
 | |O`;

const VERTICAL_LINE_X_THIRD_MOVE_WIN = `
Player X:

X| | 
-+-+-
X|O| 
-+-+-
X| |O

PLAYER X WON!`;

module.exports = {
  VERTICAL_LINE_X_FIRST_MOVE,
  VERTICAL_LINE_O_FIRST_MOVE,
  VERTICAL_LINE_X_SECOND_MOVE,
  VERTICAL_LINE_O_SECOND_MOVE,
  VERTICAL_LINE_X_THIRD_MOVE_WIN,
};
