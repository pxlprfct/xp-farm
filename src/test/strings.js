const START_GAME = `
Game Board Creation...

 | | 
-+-+-
 | | 
-+-+-
 | | 
\n
Board Created.
The game will start with player X`;

const PLAYER_X_FIRST_MOVE = `
Player X:

X| | 
-+-+-
 | | 
-+-+-
 | | `;

const PLAYER_O_FIRST_MOVE = `
Player O:

X| | 
-+-+-
 |O| 
-+-+-
 | | `;

const PLAYER_X_SECOND_MOVE = `
Player X:

X| | 
-+-+-
X|O| 
-+-+-
 | | `;

const PLAYER_O_SECOND_MOVE = `
Player O:

X| | 
-+-+-
X|O| 
-+-+-
 | |O`;

const PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE = `
Player X:

X| | 
-+-+-
X|O| 
-+-+-
X| |O

PLAYER X WON!`;

module.exports = {
  START_GAME,
  PLAYER_X_FIRST_MOVE,
  PLAYER_O_FIRST_MOVE,
  PLAYER_X_SECOND_MOVE,
  PLAYER_O_SECOND_MOVE,
  PLAYER_X_THIRD_MOVE_WON_WITH_VERTICAL_LINE,
};
