const body=document.querySelector("body");

const IMG_NUMBER=3;

function paintImage(imageNumber) {
  const image = new Image();
  image.src=`images/${imageNumber+1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number= Math.floor(Math.random()*3);
  return number;
}

function init(){
  const randomNumber=genRandom();
  paintImage(randomNumber);
}

init();