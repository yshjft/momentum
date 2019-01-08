/*
// alert("I'm Working.");
// console.log("I'm Working");
// const var let
let a=221;
let b=a-5;
a=4
const what="hys";
//이모티콘도 가능함
console.log(b, a);
*/

/*
//true 1, false 0
const wat =true;
*/

/*
//cammel case
const something="Something"
const daysOfWeek=["a", "b", "c", "d", 54, something];
console.log(daysOfWeek);
*/

/*
const nicoInfo ={
  name:"Nico",
  age:33,
  gender:"Male",
  isHandsome:true,
  favMovie:["a", "b", "c"],
  favFood: [
    {name: "k", fatty: false},
    {name:"c", fattu:true}
  ]
}

console.log(nicoInfo.favFood[0].name)
*/


/*
function h(){
  console.log("hello");
}
h();

function h2(name, age){
  console.log("hello", name, "you have ", age, " years of age");
  console.log("hello "+ name+" you have "+age+" years of age");
  console.log(`hello ${name} you are ${age} years old`);
}
h2("hys", "22");


//undefined 없애기 위하여 return 값을 설정해준다.  객체로 봐야하나?
function h3(name){
  return `hello ${name}!!!!`;
}

const greeting_again=h3("hys");
console.log(greeting_again);

const calculator={
  plus: function(a, b){
    return a+b;
  }
}
const plus=calculator.plus(5, 5);
console.log(plus);
*/

/*
console.log(document);
const title=document.getElementById("title");
console.log(title);
console.dir(title);

title.innerHTML="Hi. From JS";
title.style.color="red";
document.title="I own you now";
*/


/*
const title= document.querySelector("#title");

function handleResize(){
  console.log("I have been resized")
}
//handleResize 내가 원하는 시점에 실행
//handleResize() 지금 즉시, 자동으로 알아서 실행
window.addEventListener("resize", handleResize);

function handle(event){
  console.log(event);
}
window.addEventListener("resize", handle);


const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="#7f8c8d";

function handleClick(){
  const currentColor=title.style.color;
  if(currentColor===BASE_COLOR){
    title.style.color=OTHER_COLOR;
  }else{
    title.style.color=BASE_COLOR;
  }
}

function init(){
  title.style.color=BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();


//자바스크립트 조건문 === (같음) !==
*/

const title=document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
  /*
  const hasClass=title.classList.contains(CLICKED_CLASS);
  if(hasClass){
    title.classList.remove(CLICKED_CLASS)
  }else{
    title.classList.add(CLICKED_CLASS);
  }
  */
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();