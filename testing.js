const numStore = [];
let currentRnd = 3;

function timer() {
    setTimeout(runGame, 5000) {
        function runGame() { // winRndAlert resets numStore array
            let numGen = Math.floor(Math.random() * 4);
            return numStore.push(numGen), rndCount++; //do I need rndCount = rndCount++? NOT sure this goes here!
        }
        function numGenTally() { //any issues with runGame running again i.e. scope? maybe need a whle loop here
            if (rndCount < currentRnd) {
              return runGame();
            } else (rndCount === currentRnd) {
                return playerTurn();
            };
        }
    }
}


function timer() {
    setTimeout(rndCount, 5000) { //is thsi the one we need?
        function rndCount() {
            for (let i = 0; i < currentRnd; i++) {
                function runGame() { // winRndAlert resets numStore array
                    let numGen = Math.floor(Math.random() * 4);
                    return numStore.push(numGen), rndCount++; //do I need rndCount = rndCount++? NOT sure this goes here!
                }
            }  
        }
    }
}




/// this is ugly
