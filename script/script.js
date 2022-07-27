//=============================== Start Creative Apple Landing Page =======================
const conatiner = document.querySelector(".container"),
      mainImg = conatiner.querySelector(".content .image img");

//- changePhone Functin
function changePhone (source) {
  mainImg.src = source;
}

function colors (color) {
  conatiner.style.background = color;
}
//=============================== End Creative Apple Landing Page =======================

