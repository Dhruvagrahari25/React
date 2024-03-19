import React,{ useState } from 'react';

function ToDoList() {

    const [tasks,setTask] = useState(["Add your Tasks for today","Click on the task to remove it", "Keep Hustling!😉"]);

    function addTask(){
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        setTask(t => [...t,newTask]);
    }

    function removeTask(index){
        setTask(tasks.filter((element,indx) => indx!= index));
    }

    return(
        <div className="ToDoListContainer">
            <h1>Today's To-Do-List</h1>
            <ul>
                {tasks.map((task,index) => <li key={index} onClick={() => removeTask(index)} className="listElement">
                                                    {task}
                                            </li>)}
            </ul>
            <input type="text" className="taskInput" id="taskInput" placeholder="Today's Task"/>
            <button onClick={addTask}>Add task</button>
        </div>
    );
}

export default ToDoList