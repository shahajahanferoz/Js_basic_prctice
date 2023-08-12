

// input task added at list item
let numberGenerate=0;
const addTask = (e) => {
  const inputField = document.getElementById("inputTodo");
  const inputText = inputField.value;
  if (inputText.trim()) {
    const li = document.createElement("li");
    const textShow = document.createElement('span');
    textShow.setAttribute( 'id',`task${numberGenerate++}`)
    textShow.innerText = inputText;
    li.appendChild(textShow)

    const close = document.createElement("SPAN");
    close.innerText = "\u00D7";
    close.className = "close";
    li.appendChild(close);

    const edit = document.createElement("span");
    edit.innerText = "\u21B7";
    edit.className = "edit";
    li.appendChild(edit);
    
    const update = document.createElement("span");
    update.innerText = "\u2705";
    update.className = "update";
    li.appendChild(update);

    const ul = document.getElementById("workList");
    ul.appendChild(li);
    inputField.value = "";
  }
};
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);


//   Create a "close" button and append it to each list item
document.getElementById("workList").addEventListener("click", (event) => {
    if (event.target.className == 'close') {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);            
    }
    else if(event.target.className == 'edit'){
        text = event.target.parentNode.childNodes[0].innerText;
        const inputField = document.getElementById("inputTodo");
        inputField.value = text;
        inputField.focus();

    }
    else if(event.target.className == 'update'){
        const inputField = document.getElementById("inputTodo");
        const inputText = inputField.value;
        event.target.parentNode.childNodes[0].innerText = inputText;
        inputField.value = ""
        

    }
    else {
        if (event.target.className == 'checked') {
            event.target.classList.remove("checked");
        }
        else{
            event.target.classList.add("checked");
        }
    }
  });