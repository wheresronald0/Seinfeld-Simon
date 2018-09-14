// let hello = function() {
//   console.log("hello");
// };

// let btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", hello);

////////////
// function tileChgCall(numGen) {
//   if (numGen === 0) {
//     tile1Chg();
//     console.log("here");
//   } else if (numGen === 1) {
//     tile2Chg();
//     console.log("here");
//   } else if (numGen === 2) {
//     tile3Chg();
//     console.log("here");
//   } else if (numGen === 3) {
//     tile4Chg();
//     console.log("here");
//   }
// }

// let counter = 0;

// console.log(counter);

// increaseCounter();

// function increaseCounter() {
//   setTimeout(function() {
//     counter++;
//     console.log(counter);
//     if (counter <= numStore.length) {
//       increaseCounter();
//       tile1Chg();
//     }
//   }, 1000);
// }

// function increaseCounter(numGen) {
//   if (numStore[0]) {
//     setTimeout(function() {
//       tileChgCall();
//     }, 1000);
//   }
//   else if (numStore[1]) {
//     setTimeout(function() {
//       tileChgCall(numGen);
//     }, 2000);
//   }
//   else if (numStore[2]) {
//     setTimeout(function() {
//       tileChgCall(numGen);
//     }, 3000);
//   }
//   else if (numStore[3]) {
//     setTimeout(function() {
//       tileChgCall(numGen);
//     }, 4000);
//   }
//   else if (numStore[4]) {
//     setTimeout(function() {
//       tileChgCall(numGen);
//     }, 5000);
//   }

// let counter = 0;

// console.log(counter);

// increaseCounter();

// function increaseCounter() {
//   setTimeout(function() {
//     counter++;
//     console.log(counter);
//     if (counter <= 5) {
//       increaseCounter();
//     }
//   }, 1000);
// }

///////////

// let truFls;

// function winOrLose() {
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   }

//   for (let i = 0; i <= numStore.length; i++) {
//       truFls = (playerArr[i] === numStore[i]);
//     }

//     if (truFls === true) {
//     winRndAlert();
//   } else {
//     alert("Yadda, Yadda... YOU LOSE");
//   }

// let truFls;
// function winOrLose() {
//   if (playerArr.length > numStore.length) {
//     alert("NO SOUP FOR YOU!");
//   }
//   for (let i = 0; i < numStore.length; i++) {
//     if (playerArr[i] === numStore[i]) {
//       truFls = true;
//       console.log("true");
//     } else {
//       truFls = false;
//       console.log("false");
//     }
//   }
//   if (truFls === true) {
//     winRndAlert();
//   } else {
//     alert("Yadda, Yadda... YOU LOSE");
//   }
// }

// function winOrLose(playerArr, numStore) {
//   for (var i = 0; i < playerArr.length; i++) {
//     for (var j = 0; j < numStore.length; j++) {
//       if (numStore[j] === playerArr[i]) {
//         winRndAlert();
//       }
//     }
//   }
//   alert("Yadda, Yadda... YOU LOSE");
// }

// function randomNumGen() {
//   let numGen = Math.floor(Math.random() * 4);
//   numStore.push(numGen);
//   increaseCounter(numGen);
//   console.log("2");
// }

// function startGame() {
//   for (let i = 0; i < currentRnd; i++) {
//     randomNumGen(); //seperate
//     console.log("1");
//   }
// }

// Player clicks
// function winOrLose() {
//   if (playerArr.length === numStore.length) {
//     console.log("both arrays same length, is evaluating");
//     for (var i = 0; i < playerArr.length; i++) {
//       for (var j = 0; j < numStore.length; j++) {
//         if (numStore[j] === playerArr[i]) {
//           numStore = [];
//           playerArr = [];
//           stageData = [];
//           console.log("play won!");
//           setTimeout(function() {
//             winRndAlert();
//           }, 1500);
//         }
//         if (numStore[j] !== playerArr[i]) {
//           setTimeout(function() {
//             alert("NO SOUP FOR YOU!! -GAME OVER-");
//           }, 1500);
//         }
//       }
//     }
//   }
//   if (playerArr.length > numStore.length) {
//     alert("Yadda, Yadda... YOU LOSE");
//   }
// }

////// Guts

// function increaseCounter(numGen) {
//   //I think this is still processing all number as one event
//   let counter = 0;
//   increaseByOneSecond();

//   function increaseByOneSecond() {
//     setTimeout(function() {
//       counter++;
//       if (counter <= currentRnd) {
//         tileChgCall(numGen);
//       }
//     }, 1500);
//   }
//   console.log("increased counter on!");
// }
