function tile1Chg() {
  setTimeout(function tileChg() {
    jerry.style.borderColor = "red";
  }, 1000);
  setTimeout(function tileChg() {
    jerry.style.borderColor = "black";
  }, 1000);
}
function tile2Chg() {
  setTimeout(function tileChg() {
    elaine.style.borderColor = "red";
  }, 1000);
  setTimeout(function tileChg() {
    elaine.style.borderColor = "black";
  }, 1000);
}
function tile3Chg() {
  setTimeout(function tileChg() {
    kramer.style.borderColor = "red";
  }, 1000);
  setTimeout(function tileChg() {
    kramer.style.borderColor = "black";
  }, 1000);
}
function tile4Chg() {
  setTimeout(function tileChg() {
    george.style.borderColor = "red";
  }, 1000);
  setTimeout(function tileChg() {
    george.style.borderColor = "black";
  }, 1000);
}

function foo(numGen) {
  if (numGen === 1) {
    function tile1Chg() {
      setTimeout(function tileChg() {
        jerry.style.borderColor = "red";
      }, 1000);
      setTimeout(function tileChg() {
        jerry.style.borderColor = "black";
      }, 1000);
    }
  } else if (numGen === 2) {
    function tile2Chg() {
      setTimeout(function tileChg() {
        elaine.style.borderColor = "red";
      }, 1000);
      setTimeout(function tileChg() {
        elaine.style.borderColor = "black";
      }, 1000);
    }
  } else if (numGen === 3) {
    function tile3Chg() {
      setTimeout(function tileChg() {
        kramer.style.borderColor = "red";
      }, 1000);
      setTimeout(function tileChg() {
        kramer.style.borderColor = "black";
      }, 1000);
    }
  } else if (numGen === 4) {
    function tile4Chg() {
      setTimeout(function tileChg() {
        george.style.borderColor = "red";
      }, 1000);
      setTimeout(function tileChg() {
        george.style.borderColor = "black";
      }, 1000);
    }
  }
  evt.preventDefault();
  return playerTurn(); //tiggers player turn
}
