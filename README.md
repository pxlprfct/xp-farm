# Tic-Tac-Toe Kata

### Technical recruitment test

### Test Description
The exercise involves developing a Tic-Tac-Toe game strictly adhering to the **TDD rules**.

#### Game Rules:
https://en.wikipedia.org/wiki/Tic-tac-toe

### TDD Scenarios:
1. Game Board Creation phase:

```
Game Board Creation...
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created.
The game will start with player X
```

2. Player X won with a vertical line

```
Player X:
X| | 
-+-+- 
X|O| 
-+-+-
X| |O
PLAYER X WON!
```

3. Player O won with a horizontal line

```
Player O:
X| |X
-+-+-
O|O|O
-+-+-
X| | 
PLAYER O WON!
```

4. Player X won with a diagonal line

```
Player X:
X| | 
-+-+- 
O|X| 
-+-+-
O| |X
PLAYER X WON!
```

5. Game ends with a draw

```
Player X: 
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O

GAME ENDS WITH A DRAW!
```

#### GOAL:
The system could be run in BOT mode to print on the screen all player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.

##### Extra evaluation points:
- Analyze the kata with an agile approach: product backlog, epics and smaller user story with UAT for the TDD approach;
- Create the UAT compliant with a BDD framework;
- Publish the project into an open source repository;
- Create the CI and CD pipeline;
- Publish the code coverage;
- Delivery the project with an application container;
- Design the project with a modern CQRS, event sourcing approach;

#### White Belt trainer graduation criteria:
- The kata has to be done in solo mode
- Every scenario has to be planned in a pomodoro cycle.
- The pomodoro cycle has to be committed with a ‘pair-programming-notes’ into the code base.
- The notes have to show your simple design approach and how you organised the code growth between features VS tech debt and refactor.
- The code has to be done in a strict TDD way, via cycles of Red/Green/Refactor with a commit, or more, for every cycle.
- The code has to be in a public code repository
- Last but not least, the refactor on this belt graduation is focus only on these aspects:
  - **Test:** make the suite readable like the kata description
  - **Naming:** the code and the tests have to share the same glossary/vocabulary
  - **Readability:** the code has to be read as a book (hide the complexity behind behavioural encapsulation)
- **The test needs to be completed within 4 pomodoros - around 2 hours**

