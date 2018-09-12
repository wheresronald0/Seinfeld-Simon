// need funtion that initiates game when user click play
const play = document.querySelector("#play");
play.addEventListener("click", timerEng()); //add random # gen function once I get it working

const numStore = [];
let currentRnd = 0;

function timerEng() {
    setTimeout(rndCount, 5000) { //is this the one we need? 
        function rndCount() {
            for (let i = 0; i < currentRnd; i++) {
                function runGame() { // winRndAlert resets numStore array
                    let numGen = Math.floor(Math.random() * 4);
                    return numStore.push(numGen), foo(numGen); //need to trigger/push nunGen to tile funtionality
                }
            }
        return playerTurn();  
        }
    }
}

const jerry = document.querySelector("#1");
const elaine = document.querySelector("#2");
const kramer = document.querySelector("#3");
const george = document.querySelector("#4");
const castPics = document.getElementsByClassName(".seinPics");

function tile1Chg() {
    setTimeout(function tileChg() {
      jerry.style.borderColor = "red";
    }, 1000);
    setTimeout(function tileChg() {
      jerry.style.borderColor = "black";
    }, 1000);
  }
  
  function tile2Chg() {
    setTimeout(function tileChg() {
      elaine.style.borderColor = "red";
    }, 1000);
    setTimeout(function tileChg() {
      elaine.style.borderColor = "black";
    }, 1000);
  }
  
  function tile3Chg() {
    setTimeout(function tileChg() {
      kramer.style.borderColor = "red";
    }, 1000);
    setTimeout(function tileChg() {
      kramer.style.borderColor = "black";
    }, 1000);
  }
  
  function tile4Chg() {
    setTimeout(function tileChg() {
      george.style.borderColor = "red";
    }, 1000);
    setTimeout(function tileChg() {
      george.style.borderColor = "black";
    }, 1000);
  }

function foo(numGen) { 
    if (numGen === 1) {
      return function tile1Chg();
    } else if (numGen === 2) {
      return function tile2Chg();
    } else if (numGen === 3) {
      return function tile3Chg();
    } else if (numGen === 4) {
      return function tile4Chg();
    }
}

//player clicks this tile --> need to look at numGen array (check for )
//


let playerArr = [];

function playerTurn() {
  jerry.addEventListener("click", function() {
    playerArr.push(1), tileChg1(); //will this work w/o the return feature? if mutes if because it stops it
    if (playerArr.length > numStore.length) {
      alert("NO SOUP FOR YOU!");
    } else if (numStore.length === playerArr.length) {
      for (let i = 0; i < numStore.length; i++) {
        for (let j = 0; j < playerArr.length; j++) {
          if (playerArr[j] === numStore[i]) {
            return winRndAlert();
          } else (playerArr[j] !== numStore[i]) {
            alert("Game Over") 
          }
        }
      }
    }
  });

  elaine.addEventListener("click", function() {
    playerArr.push(2), tile2Chg();
    if (playerArr.length > numStore.length) {
      alert("NO SOUP FOR YOU!");
    } else if (numStore.length === playerArr.length) {
      for (let i = 0; i < numStore.length; i++) {
        for (let j = 0; j < playerArr.length; j++) {
          if (playerArr[j] === numStore[i]) {
            return winRndAlert();
          } else (playerArr[j] !== numStore[i]) {
            alert("Game Over") 
          }
        }
      }
    }
  });

  kramer.addEventListener("click", function() {
    playerArr.push(3), tile3Chg();
    if (playerArr.length > numStore.length) {
      alert("NO SOUP FOR YOU!");
    } else if (numStore.length === playerArr.length) {
      for (let i = 0; i < numStore.length; i++) {
        for (let j = 0; j < playerArr.length; j++) {
          if (playerArr[j] === numStore[i]) {
            return winRndAlert();
          } else (playerArr[j] !== numStore[i]) {
             alert("Game Over") 
          }
        }
      }
    }
  });

  george.addEventListener("click", function() {
    playerArr.push(4), tile4Chg();
    if (playerArr.length > numStore.length) {
      alert("NO SOUP FOR YOU!");
    } else if (numStore.length === playerArr.length) {
      for (let i = 0; i < numStore.length; i++) {
        for (let j = 0; j < playerArr.length; j++) {
          if (playerArr[j] === numStore[i]) {
            return winRndAlert();
          } else (playerArr[j] !== numStore[i]) {
             alert("Game Over") 
          }
        }
      }
    }
  });
}

//after player turn, then "if true"/player got it, need to return to numGen to++ and start aagin

//need an alert function
function winRndAlert() {
    alert("You got it!. Let's move to the next round")
    return currentRnd += 1, numStore = [], timerEng();//not sure this wil work
}

//need reset button that resets the currentRnd and rndCount