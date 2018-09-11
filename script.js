const jerry = document.querySelector("#one");
const elaine = document.querySelector("#two");
const kramer = document.querySelector("#three");
const george = document.querySelector("#four");
console.log(jerry);

// need funtion that initiates game when user click play
const play = document.querySelector("#play");
play.addEventListener("click", runGame); //add random # gen function once I get it working

// need random # generator
// const runGame = Math.floor(Math.random() * 4); //working code
// console.log(runGame);
const numStore = [];
function runGame() {
  Math.floor(Math.random() * 4);
  return numStore.push();
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
};
