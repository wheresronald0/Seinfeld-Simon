const jerry = document.querySelector("#one");
const elaine = document.querySelector("#two");
const kramer = document.querySelector("#three");
const george = document.querySelector("#four");
console.log(jerry);

// need random # generator
const runGame = Math.floor(Math.random() * 4);
console.log(runGame);

// need time intervals between tile flashes (slide show) 
setTimeout(function, 3000); 

// need funtion that initiates game when user click play
const play = document.querySelector("#play");
play.addEventListener("click", runGame); //add random # gen function once I get it working
