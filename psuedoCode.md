-list tech and list how i githubed it
-need to have instructions

psuedo:
Computers turn:

- user presses play button:
  - trigger startGame() function
  - create first random number and add it to the numStore array
  - get tile from Simon gameboard
  - highlight it
  - remove highlighting
- player clicks on their guess

  - triggers tile highlight for the tile they clicked
  - add that valiue to an playerArr array
  - check it two arrays are the same length
  - if same length check for indentical values
  - if same alert congrats
    - if win, advance to the next round
  - if not alert you suck

* numbers are generated with a random number generator function (#1-4)
  -# generator stors the number in a blank array
  --> # output triggers the "tile highlight" function
  -(each tile is represented by a number that cooresponds to random number generator)

-round 1 starts with one # generated and tile highlighted, and increments++ each round

-there is a time increment between tiles being highlighted

- the funtion stops after each randon # generation
  -that number is stored in an array

Users turn:
-user selects tile and that tile (associated with a #) is compare via boolean statment with the stored array
-if true, then the turn is passed back to the computer for the next round of # generation
-if false, the turn is over and message is displayed

---- thought process of picking game ----
only 4 tiles
once I have the code for 1, all I have to do is multiply
-need random order code (program to stop that # of moves, at each increment (1, 2, 3, etc.)
-I know how to change the background with a counter now
-I can make the graphics cool (portfolio appeal)
