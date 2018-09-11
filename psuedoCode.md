-list tech and list how i githubed it
-need to have instructions

psuedo:
Computers turn:
-user presses play button (only one user can play at a time) --> tirggers event click --> triggers # generator
-numbers are generated with a random number generator function (#1-4) --> # output triggers the "tile highlight" funtion
-each tile is represented by a number that cooresponds to random number generator
-there is a time increment between tiles being highlighted
-round 1 starts with one # generated and tile highlighted, and increments++ each round

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
