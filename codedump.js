// <------------------------->
// // need random # generator
// // const runGame = Math.floor(Math.random() * 4); //working code
// // console.log(runGame);
// const numStore = [];
// function runGame() {
//   let numGen = Math.floor(Math.random() * 4);
//   return numStore.push(numGen);
// }

// // need time intervals between tile flashes (slide show)
// //setTimeout(function, 3000);

// //need funtion that takes the input from the #gen
// const numStore = [];
// <--------------------------->

// <--------------------------->
// // function timer() {
// //     setTimeout(runGame, 5000) {
// //         function runGame() { // winRndAlert resets numStore array
// //             let numGen = Math.floor(Math.random() * 4);
// //             return numStore.push(numGen), rndCount++; //do I need rndCount = rndCount++? NOT sure this goes here!
// //         }
// //         function numGenTally() { //any issues with runGame running again i.e. scope? maybe need a whle loop here
// //             if (rndCount < currentRnd) {
// //               return runGame();
// //             } else (rndCount === currentRnd) {
// //                 return playerTurn();
// //             };
// //         }
// //     }
// // }
// <---------------------------->

//  < -------------------- >
// // function foo (numGen) {
// //     if (numStore[0] === 1) {
// //       castPics.style.borderColor = "red";
// //     } else if (numStore[0] === 2) {
// //       castPics.style.borderColor = "green";
// //     } else if (numStore[0] === 3) {
// //       castPics.style.borderColor = "green";
// //     } else if (numStore[0] === 4) {
// //       castPics.style.borderColor = "green";
// //     }
// //     evt.preventDefault();
// //     return playerTurn(); //tiggers player turn
// //   };
//   < ---------------------- >

// <------------------------>
// let playerArr = [];

// function playerTurn() {
//   jerry.addEventListener("click", function() {
//     returnplayerArr.push(1);
//     if (playerArr.length > numStore.length) {
//       alert("NO SOUP FOR YOU!");
//     } else if (numStore.length === playerArr.length) {
//       for (let i = 0; i < numStore.length; i++) {
//         for (let j = 0; j < playerArr.length; j++) {
//           if (playerArr[j] === numStore[i]) {
//             return winRndAlert();
//           } else (playerArr[j] !== numStore[i]) {
//             alert("Game Over")
//           }
//         }
//       }
//     }
//   });

//   elaine.addEventListener("click", function() {
//     playerArr.push(2);
//     if (playerArr.length > numStore.length) {
//       alert("NO SOUP FOR YOU!");
//     } else if (numStore.length === playerArr.length) {
//       for (let i = 0; i < numStore.length; i++) {
//         for (let j = 0; j < playerArr.length; j++) {
//           if (playerArr[j] === numStore[i]) {
//             return winRndAlert();
//           } else (playerArr[j] !== numStore[i]) {
//             alert("Game Over")
//           }
//         }
//       }
//     }
//   });

//   kramer.addEventListener("click", function() {
//     playerArr.push(3);
//     if (playerArr.length > numStore.length) {
//       alert("NO SOUP FOR YOU!");
//     } else if (numStore.length === playerArr.length) {
//       for (let i = 0; i < numStore.length; i++) {
//         for (let j = 0; j < playerArr.length; j++) {
//           if (playerArr[j] === numStore[i]) {
//             return winRndAlert();
//           } else (playerArr[j] !== numStore[i]) {
//              alert("Game Over")
//           }
//         }
//       }
//     }
//   });

//   george.addEventListener("click", function() {
//     playerArr.push(4);
//     if (playerArr.length > numStore.length) {
//       alert("NO SOUP FOR YOU!");
//     } else if (numStore.length === playerArr.length) {
//       for (let i = 0; i < numStore.length; i++) {
//         for (let j = 0; j < playerArr.length; j++) {
//           if (playerArr[j] === numStore[i]) {
//             return winRndAlert();
//           } else (playerArr[j] !== numStore[i]) {
//              alert("Game Over")
//           }
//         }
//       }
//     }
//   });
// }
//  <---------------------------------->

// <-------------------------->
// function timerEng() {
//     setTimeout(rndCount, 5000) { //is this the one we need?
//         function rndCount() {
//             for (let i = 0; i < currentRnd; i++) {
//                 function runGame() { // winRndAlert resets numStore array
//                     let numGen = Math.floor(Math.random() * 4);
//                     return numStore.push(numGen), foo(numGen); //need to trigger/push nunGen to tile funtionality
//                 }
//             }
//         return playerTurn();
//         }
//     }
// }
// <------------------------->
