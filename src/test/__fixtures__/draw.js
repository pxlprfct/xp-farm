const DRAW_X_FIRST_MOVE = `
Player X:

X| | 
-+-+-
 | | 
-+-+-
 | | `;

const DRAW_O_FIRST_MOVE = `
Player O:

X| | 
-+-+-
O| | 
-+-+-
 | | `;

const DRAW_X_SECOND_MOVE = `
Player X:

X| |X
-+-+-
O| | 
-+-+-
 | | `;

const DRAW_O_SECOND_MOVE = `
Player O:

X| |X
-+-+-
O|O| 
-+-+-
 | | `;

const DRAW_X_THIRD_MOVE = `
Player X:

X| |X
-+-+-
O|O|X
-+-+-
 | | `;

const DRAW_O_THIRD_MOVE = `
Player O:

X| |X
-+-+-
O|O|X
-+-+-
 | |O`;

const DRAW_X_FOURTH_MOVE = `
Player X:

X| |X
-+-+-
O|O|X
-+-+-
X| |O`;

const DRAW_O_FOURTH_MOVE = `
Player O:

X|O|X
-+-+-
O|O|X
-+-+-
X| |O`;

const DRAW_X_FIFTH_MOVE_DRAW = `
Player X:

X|O|X
-+-+-
O|O|X
-+-+-
X|X|O

GAME ENDS WITH A DRAW!`;

module.exports = {
  DRAW_X_FIRST_MOVE,
  DRAW_O_FIRST_MOVE,
  DRAW_X_SECOND_MOVE,
  DRAW_O_SECOND_MOVE,
  DRAW_X_THIRD_MOVE,
  DRAW_O_THIRD_MOVE,
  DRAW_X_FOURTH_MOVE,
  DRAW_O_FOURTH_MOVE,
  DRAW_X_FIFTH_MOVE_DRAW,
};
