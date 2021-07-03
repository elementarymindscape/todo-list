    const toDoInput = document.querySelector('.Input');
    const toDoButton = document.querySelector('.Button');
    const toDoList = document.querySelector('.List');
    // const filterAllToDo = document.querySelector('.all-tasks')
    const filterLow = document.querySelector('.low-button');


    toDoButton.addEventListener('click', createToDo);
    toDoList.addEventListener('click', deleteCheckToDo);
    // filterAllToDo.addEventListener('click', filterAll);
    filterLow.addEventListener('click', filterLowToDo);
    


    function createToDo(e) {
        e.preventDefault();

        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add("toDo");

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

        var select = document.getElementById('todos');
        alert(select.options[select.selectedIndex].value);

        var value = select.options[select.selectedIndex].value;
        toDoDiv.classList.add(value);

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

    function filterLowToDo(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "low": if(todo.classList.contains("low")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
            }
        });

    }



 