    const toDoInput = document.querySelector('.Input');
    const toDoButton = document.querySelector('.Button');
    const toDoList = document.querySelector('.List');



    toDoButton.addEventListener('click', createToDo)
    toDoList.addEventListener('click', deleteCheckToDo )


    function createToDo(e) {
        e.preventDefault();

        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add("to-do");

        const newToDo = document.createElement('li');
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("toDo-Item");
        toDoDiv.appendChild(newToDo);

        const completeButton = document.createElement("button");
        completeButton.innerHTML = ' <i class="fas fa-check"></i> '
        completeButton.classList.add('complete-button');
        toDoDiv.appendChild(completeButton)

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = ' <i class="fas fa-trash"></i> ';
        deleteButton.classList.add('delete-button');
        toDoDiv.appendChild(deleteButton);

        toDoList.appendChild(toDoDiv);
        toDoInput.value="";
    }

    function deleteCheckToDo(e){
        const toDoItem = e.target;
        if ( toDoItem.classList[0] === 'delete-button'){
            const todo = toDoItem.parentElement;
            todo.classList.add('deleteAnim');
            todo.addEventListener('transitionend', function(){
                todo.remove();
            });
        }

        if (toDoItem.classList[0] === "complete-button") {
            const todo = toDoItem.parentElement;
            todo.classList.toggle("completed");
            console.log(todo);
          }
    }