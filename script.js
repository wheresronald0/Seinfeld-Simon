const jerry = document.querySelector("#one");
const elaine = document.querySelector("#two");
const kramer = document.querySelector("#three");
const george = document.querySelector("#four");

const playButton = document.querySelector("#play");
playButton.addEventListener("click", startGame);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

let numStore = [];
let playerArr = [];
let stageData = [];
let currentRnd = 1;

function resetGame() {
  currentRnd = 1;
  startGame();
}

function startGame() {
  for (let i = 0; i < currentRnd; i++) {
    (function(i) {
      setTimeout(function() {
        randomNumGen();
      }, 1600 * i);
    })(i);
  }
} //controling the timing from this function

function randomNumGen() {
  let numGen = Math.floor(Math.random() * 4);
  numStore.push(numGen);
  tileChgCall(numGen); // data is staging in array equal to numstore (checked!)
}

function tileChgCall(numGen) {
  if (numGen == 0) {
    tile1Chg();
  } else if (numGen == 1) {
    tile2Chg();
  } else if (numGen == 2) {
    tile3Chg();
  } else if (numGen == 3) {
    tile4Chg();
  }
}

for (var i = 0; i < attributes.length; i++) {
  input.setAttribute(attributes[i], values[i]);
}

function tile1Chg() {
  //jerry.style.borderColor = "red";
  jerry.setAttribute("src", "images/jerry2.jpg");
  var attributes = ["border-radius", "border-color"];
  var values = ["50%", "red"];
  for (var i = 0; i < attributes.length; i++) {
    jerry.style(attributes[i], values[i]);
  }
  setTimeout(function tileChg() {
    chg1Back();
  }, 500);
}
function chg1Back() {
  jerry.style.borderColor = "white";
  //jerry.setAttribute("src", "images/jerry.PNG");
}

// function tile1Chg() {
//   jerry.style.borderColor = "red";
//   setTimeout(function tileChg() {
//     chg1Back();
//   }, 500);
// }
// function chg1Back() {
//   jerry.style.borderColor = "white";
// }

function tile2Chg() {
  elaine.style.borderColor = "yellow";
  setTimeout(function tileChg() {
    chg2Back();
  }, 500);
}
function chg2Back() {
  elaine.style.borderColor = "white";
}

function tile3Chg() {
  kramer.style.borderColor = "blue";
  setTimeout(function tileChg() {
    chg3Back();
  }, 500);
}
function chg3Back() {
  kramer.style.borderColor = "white";
}

function tile4Chg() {
  george.style.borderColor = "green";
  setTimeout(function tileChg() {
    chg4Back();
  }, 500);
}
function chg4Back() {
  george.style.borderColor = "white";
}

let truFls = true;
function winOrLose() {
  if (playerArr.length > numStore.length) {
    alert("Yadda, Yadda... YOU LOSE");
  }

  if (playerArr.length === numStore.length) {
    for (let i = 0; i < numStore.length; i++) {
      console.log(playerArr[i], numStore[i]);
      if (playerArr[i] !== numStore[i]) {
        truFls = false;
      }
    }
    if (truFls === true) {
      setTimeout(function() {
        winRndAlert();
      }, 1000);
    } else {
      setTimeout(function() {
        alert("NO SOUP FOR YOU!! -GAME OVER-");
      }, 1000);
    }
  }
}

jerry.addEventListener("click", function() {
  playerArr.push(0);
  tile1Chg();
  winOrLose();
});

elaine.addEventListener("click", function() {
  playerArr.push(1);
  tile2Chg();
  winOrLose();
});

kramer.addEventListener("click", function() {
  playerArr.push(2);
  tile3Chg();
  winOrLose();
});

george.addEventListener("click", function() {
  playerArr.push(3);
  tile4Chg();
  winOrLose();
});

function winRndAlert() {
  alert("You got it!. Let's move to the next round");
  advncNextRnd();
}

function advncNextRnd() {
  currentRnd++;
  setTimeout(function() {
    startGame();
  }, 1200);
}
