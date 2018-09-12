const jerry = document.querySelector("#one");
const elaine = document.querySelector("#two");
const kramer = document.querySelector("#three");
const george = document.querySelector("#four");

const playButton = document.querySelector("button");
playButton.addEventListener("click", startGame);

let numStore = [];
let playerArr = [];
let currentRnd = 1;

// Guts
function tileChgCall(numGen) {
  if (numGen === 0) {
    tile1Chg();
    console.log("here");
  } else if (numGen === 1) {
    tile2Chg();
    console.log("here");
  } else if (numGen === 2) {
    tile3Chg();
    console.log("here");
  } else if (numGen === 3) {
    tile4Chg();
    console.log("here");
  }
}

function tile1Chg() {
  setTimeout(function tileChg() {
    jerry.style.borderColor = "red";
    chg1Back();
  }, 0000);
  function chg1Back() {
    setTimeout(function tileChg() {
      jerry.style.borderColor = "white";
    }, 1000);
  }
}

function tile2Chg() {
  setTimeout(function tileChg() {
    elaine.style.borderColor = "yellow";
    chg2Back();
  }, 0000);
  function chg2Back() {
    setTimeout(function tileChg() {
      elaine.style.borderColor = "white";
    }, 1000);
  }
}

function tile3Chg() {
  setTimeout(function tileChg() {
    kramer.style.borderColor = "blue";
    chg3Back();
  }, 0000);
  function chg3Back() {
    setTimeout(function tileChg() {
      kramer.style.borderColor = "white";
    }, 1000);
  }
}

function tile4Chg() {
  setTimeout(function tileChg() {
    george.style.borderColor = "green";
    chg4Back();
  }, 0000);
  function chg4Back() {
    setTimeout(function tileChg() {
      george.style.borderColor = "white";
    }, 1000);
  }
}

// Player clicks

jerry.addEventListener("click", function() {
  //JS is loading at different times
  playerArr.push(0);
  tile1Chg();
  jerryCnt();
  console.log("howdy");
});

function jerryCnt() {
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
    for (let i = 0; i < numStore.length; i++) {
      //Nested for loops array compare idea source came from W3Scools.com
      for (let j = 0; j < playerArr.length; j++) {
        if (playerArr[j] === numStore[i]) {
          winRndAlert();
        } else {
          alert("Yadda, Yadda... YOU LOSE");
        }
      }
    }
  }
}

elaine.addEventListener("click", function() {
  playerArr.push(1);
  tile2Chg();
  console.log("howdy");
});

function elaineCnt() {
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
    for (let i = 0; i < numStore.length; i++) {
      for (let j = 0; j < playerArr.length; j++) {
        if (playerArr[j] === numStore[i]) {
          winRndAlert();
        } else {
          alert("Yadda, Yadda... YOU LOSE");
        }
      }
    }
  }
}

kramer.addEventListener("click", function() {
  playerArr.push(2);
  tile3Chg();
  console.log("howdy");
});
function kramerCnt() {
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
    for (let i = 0; i < numStore.length; i++) {
      for (let j = 0; j < playerArr.length; j++) {
        if (playerArr[j] === numStore[i]) {
          winRndAlert();
        } else {
          alert("Yadda, Yadda... YOU LOSE");
        }
      }
    }
  }
}

george.addEventListener("click", function() {
  playerArr.push(3);
  tile4Chg();
  console.log("howdy");
});
function georgeCnt() {
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
    for (let i = 0; i < numStore.length; i++) {
      for (let j = 0; j < playerArr.length; j++) {
        if (playerArr[j] === numStore[i]) {
          winRndAlert();
        } else {
          alert("Yadda, Yadda... YOU LOSE");
        }
      }
    }
  }
}

function winRndAlert() {
  alert("You got it!. Let's move to the next round");
  currentRnd += 1;
  numStore = [];
  timerEng();
}

///// Engine
function randomNumGen() {
  let numGen = Math.floor(Math.random() * 4);
  numStore.push(numGen);
  tileChgCall(numGen);
  console.log("here");
}

function startGame() {
  console.log("here");
  randomNumGen();
}

// function rndCount(currentRnd) {
//   for (let i = 0; i < currentRnd; i++) {
//     randomNumGen();
//   }
// }

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
