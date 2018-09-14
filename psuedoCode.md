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

- start next round

  - call function that starts the number generator again
  - clear both arrays
  - iterate to that the number genrator run++
  - maybey a timer countdown?

- Users turn:
- user selects tile and that tile (associated with a #) is compare via boolean statment with the stored array
- if true, then the turn is passed back to the computer for the next round of # generation
- if false, the turn is over and message is displayed

* numbers are generated with a random number generator function (#1-4)
