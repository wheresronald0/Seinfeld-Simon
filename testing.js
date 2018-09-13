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

// function stager() {
//   if (numStore[0]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 1000);
//   }
//   else if (numStore[1]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 1000);
//   }
//   else if (numStore[2]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 1000);
//   }
//   else if (numStore[3]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 1500);
//   }
//   else if (numStore[4]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 2000);
//   }
//   else if (numStore[5]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 2500);
//   }
//   else if (numStore[6]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 3000);
//   }
//   else if (numStore[7]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 3500);
//   }
//   else if (numStore[8]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 4000);
//   }
//   else if (numStore[9]) {
//     setTimeout(function() {
//       tileChgCall(0);
//     }, 4500);
// };

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

let truFls;
function winOrLose() {
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  }
  for (let i = 0; i < numStore.length; i++) {
    if (playerArr[i] === numStore[i]) {
      truFls = true;
      console.log("true");
    } else {
      truFls = false;
      console.log("false");
    }
  }
  if (truFls === true) {
    winRndAlert();
  } else {
    alert("Yadda, Yadda... YOU LOSE");
  }
}
