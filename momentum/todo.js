const toDoForm=document.querySelector(".js-toDoForm"),
 toDoInput=toDoForm.querySelector("input"),
 toDoList=document.querySelector(".js-toDoList");

const ToDo_LS='toDos';


let toDos=[];

function deleteToDo(evet){
  const btn=event.target;
  const li=btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos=toDos.filter(function(toDo) {
    return toDo.id!==parseInt(li.id);
  });
  toDos=cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(ToDo_LS, JSON.stringify(toDos));
  // 문자열로 바꾸어 준다.
}

function paintToDo(text){
  const li=document.createElement("li");
  const delBtn=document.createElement("button");
  const span=document.createElement("span");
  const newId=toDos.length+1;
  delBtn.innerText="X";
  delBtn.addEventListener("click", deleteToDo)
  span.innerText=text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id=newId;
  toDoList.appendChild(li);
  const toDoObj={
    text:text,
    id:newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue=toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}

function loadToDos(){
  const loadedToDos=localStorage.getItem(ToDo_LS);
  if(loadedToDos!==null){
    const paresdToDos=JSON.parse(loadedToDos);
    paresdToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    })
  }
}

 function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
 }

 init();