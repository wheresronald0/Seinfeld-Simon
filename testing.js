let playerArr = [];

jerry.addEventListener("click", function() {
  playerArr.push(1);
  if (playerArr.length > numStore.length) {
    alert("NO SOUP FOR YOU!");
  } else if (numStore.length === playerArr.length) {
        for(let i = 0; i < numStore.length; i++) {
            for(let j = 0; j < playerArr.length; j++) {
                if (playerArr[j] === numStore[i]) {
                    return true;
                } 
            }
        }
    }
});
//-------

jerry.addEventListener("click", function() {
    playerArr.push(1);
  });
elaine.addEventListener("click", function() {
  playerArr.push(2);
});
kramer.addEventListener("click", function() {
  playerArr.push(3);
});
george.addEventListener("click", function() {
  playerArr.push(4);
});

//i need to cycle through the 4 options, or maybe not. if the user clicks it will AUTOMATICALLY execute the push

set up for loop to numStore.length
numStore[i]

for(let i = 0; i < numStore.length; i++) {
    for(let j = 0; j < playerArr.length; j++) {
       if (playerArr[j] === numStore[i]) {
        return true;
       }
   }
 }

