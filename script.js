// need funtion that initiates game when user click play
const play = document.querySelector("#play");
play.addEventListener("click", runGame); //add random # gen function once I get it working

// need random # generator
// const runGame = Math.floor(Math.random() * 4); //working code
// console.log(runGame);
const numStore = [];
function runGame() {
  let numGen = Math.floor(Math.random() * 4);
  return numStore.push(numGen);
}

// need time intervals between tile flashes (slide show)
//setTimeout(function, 3000);

//need funtion that takes the input from the #gen
const numStore = [];
const castPics = document.getElementsByClassName(".seinPics");

//need turn counter

//(need to highlight and not turn!!)
let foo = function(evt) {
  if (numStore[0] === 1) {
    castPics.style.borderColor = "red";
  } else if (numStore[0] === 2) {
    castPics.style.borderColor = "green";
  } else if (numStore[0] === 3) {
    castPics.style.borderColor = "green";
  } else if (numStore[0] === 4) {
    castPics.style.borderColor = "green";
  }
  evt.preventDefault();
  return playerTurn(); //tiggers player turn
};

//player clicks this tile --> need to look at numGen array (check for )
const jerry = document.querySelector("#1");
const elaine = document.querySelector("#2");
const kramer = document.querySelector("#3");
const george = document.querySelector("#4");
console.log(jerry);

let playerArr = [];

function playerTurn() {
  jerry.addEventListener("click", function() {
    playerArr.push(1);
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
    playerArr.push(2);
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
    playerArr.push(3);
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
    playerArr.push(4);
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

//need an alert fubntion
function winRndAlert() {
    alert("You got it!. Let's move to the next round")
    return runGame() += 1; //not sure this wil work
}
