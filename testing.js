let hello = function() {
  console.log("hello");
};

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", hello);
