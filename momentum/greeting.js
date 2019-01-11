const form=document.querySelector(".js-form"),
 input=form.querySelector("input"),
 greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
 SHOWING_CN="showing";

 function saveName(text){
   localStorage.setItem(USER_LS, text);
 }

function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN); //css는 순서대로 적용된다
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN); //입력 형식 지우기
  greeting.classList.add(SHOWING_CN); //출력
  greeting.innerText=`Hello ${text}`;
}

function loadName(){
  const currentUser=localStorage.getItem(USER_LS);
  if(currentUser===null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();