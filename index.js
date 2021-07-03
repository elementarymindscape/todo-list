    const toDoInput = document.querySelector('.Input');
    const toDoButton = document.querySelector('.Button');
    const toDoList = document.querySelector('.List');
    const filterAllToDo = document.querySelector('.all-tasks');
    const filterLowToDo = document.querySelector('.low-button');
    const filterMediumToDo = document.querySelector('.medium-button');
    const filterHighToDo = document.querySelector('.high-button');
    const filterCompletedToDo = document.querySelector('.completed-btn');


    toDoButton.addEventListener('click', createToDo);
    toDoList.addEventListener('click', deleteCheckToDo);
    filterAllToDo.addEventListener('click', filterAll);
    filterLowToDo.addEventListener('click', filterLow);
    filterMediumToDo.addEventListener('click', filterMedium);
    filterHighToDo.addEventListener('click', filterHigh);
    filterCompletedToDo.addEventListener('click', filterCompleted);
    


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

    function filterAll(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "all": todo.style.display = "flex";
                break;
            }
        });
    }

    function filterLow(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "low": if(todo.classList.contains("low")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
            }
        });
    }

    function filterMedium(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "medium": if(todo.classList.contains("medium")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
            }
        });
    }

    function filterHigh(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "high": if(todo.classList.contains("high")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
            }
        });
    }

    function filterCompleted(e){
        const todos = toDoList.childNodes;
        console.log(todos);
        todos.forEach(function(todo){
            switch(e.target.value){
                case "completed": if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
            }
        });
    }




 