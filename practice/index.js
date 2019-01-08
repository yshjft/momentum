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


//undefined 없애기 위하여 return 값을 설정해준다.
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