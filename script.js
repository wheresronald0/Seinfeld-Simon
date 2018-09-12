const jerry = document.querySelector("#1");
const elaine = document.querySelector("#2");
const kramer = document.querySelector("#3");
const george = document.querySelector("#4");
console.log(jerry);

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
const castPics = document.getElementsByClassName(".pics");

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

//need to initiate the players turn funtion

//player clicks this tile --> need to look at numGen array (check for )
let playerArr = [];

jerry.addEventListener("click", function() {
  playerArr.push(1);
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
    for (let i = 0; i < numStore.length; i++) {
      for (let j = 0; j < playerArr.length; j++) {
        if (playerArr[j] === numStore[i]) {
          return true;
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
          return true;
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
          return true;
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
          return true;
        }
      }
    }
  }
});

//after player turn, then "if true"/player got it, need to return to numGen to++ and start aagin
