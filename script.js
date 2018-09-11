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

const playerTurn = function() { // might need individal EvtL for each pic
    jerry.addEventListener('click', function() {
        if (numStore[0] === 1 && numStore.length === 1) {
            alert("you got it!");
        } else if () {

        }
        

    })
}


let playerArr = [];
if (jerryClick) {

}

let jerryClick = jerry.addEventListener('click', function() {
    playerArr.push(1)
})
let elainClick = elaine.addEventListener('click', function() {
    playerArr.push(2)
})
let kramerClick = kramer.addEventListener('click', function() {
    playerArr.push(3)
})
let georgeClick = george.addEventListener('click', function() {
    playerArr.push(4)
})

//player clicks this tile --> need to look at numGen array (check for )


//after player turn, then "if true"/player got it, need to return to numGen to++ and start aagin
