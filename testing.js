const castPics = document.getElementsByClassName(".pics");
const numStore = [1];

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
