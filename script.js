const jerry = document.querySelector("#one");
const elaine = document.querySelector("#two");
const kramer = document.querySelector("#three");
const george = document.querySelector("#four");

const playButton = document.querySelector("button");
playButton.addEventListener("click", startGame);

let numStore = [];
let playerArr = [];
let stageData = [];
let currentRnd = 2;

/// Engine

function startGame() {
  for (let i = 0; i < currentRnd; i++) {
    numStore = [];
    playerArr = [];
    stageData = [];
    randomNumGen();
    console.log("1");
  }
  function randomNumGen() {
    let numGen = Math.floor(Math.random() * 4);
    numStore.push(numGen);
    console.log("2");
  }
  console.log("3");
  stagingExtractor();
  console.log("4");
}

function stagingExtractor() {
  //source: https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/
  console.log("5");
  for (let i = 0; i < currentRnd; i++) {
    (function(i) {
      setTimeout(function() {
        stageData[i] = numStore[i];
        increaseCounter();
      }, 800 * i);
    })(i);
  }
}

////// Guts

function increaseCounter() {
  //I think this is still processing all number as one event
  let counter = 0;
  increaseByOneSecond();

  function increaseByOneSecond() {
    setTimeout(function() {
      counter++;
      if (counter <= currentRnd) {
        tileChgCall(stageData);
      }
    }, 1000);
  }
  console.log("increased counter on!");
}

//tile change
function tileChgCall(stageData) {
  for (let i = 0; i < currentRnd; i++) {
    if (stageData[i] == 0) {
      tile1Chg();
      console.log("tile1 bordere change call triggered");
    } else if (stageData[i] == 1) {
      tile2Chg();
      console.log("tile1 bordere change call triggered");
    } else if (stageData[i] == 2) {
      tile3Chg();
      console.log("tile1 bordere change call triggered");
    } else if (stageData[i] == 3) {
      tile4Chg();
      console.log("tile1 bordere change call triggered");
    }
  }
}

function tile1Chg() {
  jerry.style.borderColor = "red";
  setTimeout(function tileChg() {
    chg1Back();
    console.log("0 initial tile change");
  }, 500);
}
function chg1Back() {
  jerry.style.borderColor = "white";
  console.log("0 initial tile change BACK");
}

function tile2Chg() {
  elaine.style.borderColor = "yellow";
  setTimeout(function tileChg() {
    chg2Back();
    console.log("1 initial tile change");
  }, 500);
}
function chg2Back() {
  elaine.style.borderColor = "white";
  console.log("1 initial tile change BACK");
}

function tile3Chg() {
  kramer.style.borderColor = "blue";
  setTimeout(function tileChg() {
    chg3Back();
    console.log("2 initial tile change");
  }, 500);
}
function chg3Back() {
  kramer.style.borderColor = "white";
  console.log("2 initial tile change BACK");
}

function tile4Chg() {
  george.style.borderColor = "green";
  setTimeout(function tileChg() {
    chg4Back();
    console.log("3 initial tile change");
  }, 500);
}
function chg4Back() {
  george.style.borderColor = "white";
  console.log("3 initial tile change BACK");
}

// Player clicks

function winOrLose(playerArr, stageData) {
  if (playerArr.length === stageData.length) {
    console.log("this is evaluating");
    for (var i = 0; i < playerArr.length; i++) {
      for (var j = 0; j < stageData.length; j++) {
        if (stageData[j] === playerArr[i]) {
          setTimeout(function() {
            winRndAlert();
          }, 1500);
        }
        if (stageData[j] !== playerArr[i]) {
          setTimeout(function() {
            alert("NO SOUP FOR YOU!! -GAME OVER-");
          }, 1500);
        }
      }
    }
  }
  if (playerArr.length > stageData.length) {
    alert("Yadda, Yadda... YOU LOSE");
  }
}

jerry.addEventListener("click", function() {
  playerArr.push(0);
  tile1Chg();
  winOrLose(playerArr, stageData);
  console.log("jerry click funct calls");
});

elaine.addEventListener("click", function() {
  playerArr.push(1);
  tile2Chg();
  winOrLose(playerArr, stageData);
  console.log("elaine click funct calls");
});

kramer.addEventListener("click", function() {
  playerArr.push(2);
  tile3Chg();
  winOrLose(playerArr, stageData);
  console.log("kramer click funct calls");
});

george.addEventListener("click", function() {
  playerArr.push(3);
  tile4Chg();
  winOrLose(playerArr, stageData);
  console.log("george click funct calls");
});

///// start next rnd
function winRndAlert() {
  alert("You got it!. Let's move to the next round");
  advncNextRnd();
  console.log("win alert triggered, advance to the next round");
}

function advncNextRnd() {
  setTimeout(function() {
    startGame();
    console.log("pause between rounds");
  }, 2000);
}

/////
// function randomNumGen() {
//   let numGen = Math.floor(Math.random() * 4);
//   numStore.push(numGen);
//   increaseCounter(numGen); //triggering exponentially per round
//   console.log("2");
// }

// function startGame() {
//   for (let i = 0; i < currentRnd; i++) {
//     randomNumGen(); //seperate
//     console.log("1");
//   }
// }

//////////
// function timeControl(numGen) {
//   if (currentRnd == numStore.length) {
//     increaseCounter(numGen);
//   }
// }

// function randomNumGen() {
//   let numGen = Math.floor(Math.random() * 4);
//   numStore.push(numGen);
//   increaseCounter(numGen); //seperate
//   console.log("2");
// }

// function startGame() {
//   for (let i = 0; i < currentRnd; i++) {
//     randomNumGen(); //seperate
//     console.log("1");
//   }
// }
///////////

// //player clicks this tile --> need to look at numGen array (check for )
// //

// jerry.addEventListener("click", function() {
//   playerArr.push(1), tileChg1(); //will this work w/o the return feature? if mutes if because it stops it
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   } else if (numStore.length === playerArr.length) {
//     for (let i = 0; i < numStore.length; i++) {
//       //Nested for loops array compare idea source came from W3Scools.com
//       for (let j = 0; j < playerArr.length; j++) {
//         if (playerArr[j] === numStore[i]) {
//           winRndAlert();
//         } else {
//           alert("Yadda, Yadda... YOU LOSE");
//         }
//       }
//     }
//   }
// });

// elaine.addEventListener("click", function() {
//   playerArr.push(2), tile2Chg();
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   } else if (numStore.length === playerArr.length) {
//     for (let i = 0; i < numStore.length; i++) {
//       for (let j = 0; j < playerArr.length; j++) {
//         if (playerArr[j] === numStore[i]) {
//           winRndAlert();
//         } else {
//           alert("Yadda, Yadda... YOU LOSE");
//         }
//       }
//     }
//   }
// });

// kramer.addEventListener("click", function() {
//   playerArr.push(3), tile3Chg();
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   } else if (numStore.length === playerArr.length) {
//     for (let i = 0; i < numStore.length; i++) {
//       for (let j = 0; j < playerArr.length; j++) {
//         if (playerArr[j] === numStore[i]) {
//           winRndAlert();
//         } else {
//           alert("Yadda, Yadda... YOU LOSE");
//         }
//       }
//     }
//   }
// });

// george.addEventListener("click", function() {
//   playerArr.push(4), tile4Chg();
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   } else if (numStore.length === playerArr.length) {
//     for (let i = 0; i < numStore.length; i++) {
//       for (let j = 0; j < playerArr.length; j++) {
//         if (playerArr[j] === numStore[i]) {
//           winRndAlert();
//         } else {
//           alert("Yadda, Yadda... YOU LOSE");
//         }
//       }
//     }
//   }
// });

// //after player turn, then "if true"/player got it, need to return to numGen to++ and start aagin

// //need an alert function
// function winRndAlert() {
//   //is there an alert timer or does the next line execute once you click off, or does it break?
//   alert("You got it!. Let's move to the next round");
//   currentRnd += 1;
//   numStore = [];
//   timerEng();
// }

// //need reset button that resets the currentRnd and rndCount

//--------   code dump for win alert ------------------
// function winRndAlert() {
//     alert("You got it!. Let's move to the next round");
//     advncNextRnd();
//     startGame();
//   }

//   function advncNextRnd() {
//     //need to tie this to each of 4 player tiles
//     numStore = [];
//     playerArr = [];
//     currentRnd = current + 1;
//   }

/// engine///
// function cntAdvance() {
//   console.log("here");
//   randomNumGen();
// }

/////////
// let truFls = true;
// function winOrLose() {
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   }

//   for (let i = 0; i < numStore.length; i++) {
//     console.log(playerArr[i], numStore[i]);
//     if (playerArr[i] !== numStore[i]) {
//       truFls = false;
//       console.log("evaluates to false");
//     }
//   }
//   if (truFls === true) {
//     winRndAlert();
//   } else {
//
//   }
// }
