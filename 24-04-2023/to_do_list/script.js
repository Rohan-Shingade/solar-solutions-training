const addtoList = () => {

  let taskname = document.getElementById('taskname').value;
  let todoDiv = document.getElementById('mytodo');

  let newToDoItem = document.createElement('div');

      let toDoName = document.createElement('li');
    toDoName.innerHTML = taskname;

    let deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');
  

    newToDoItem.appendChild(toDoName);
    newToDoItem.appendChild(deletebtn);

    todoDiv.appendChild(newToDoItem);
    taskname = document.getElementById('taskname').value = '';
  }

let todoDiv = document.getElementById('mytodo');
todoDiv.addEventListener('click', deleteItem);

function deleteItem (e) {

  const element = e.target;
  if (element.classList[0] == 'far') {
    element.parentElement.remove();
  }
}