import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoApp.css";

function TodoApp(){
    let [taskArr,setTaskArr] = useState([]);
    let [newTask,setNewTask] = useState("");
    let addNewTask = (event)=>{
        setNewTask(event.target.value);
    }
    let updateTodo = ()=>{
        setTaskArr(()=>(
            [...taskArr,{task:newTask,id:uuidv4(),isCompleted:false}]
        ))
        setNewTask("")
    }
    let deleteTask =(id)=>{
        setTaskArr(taskArr.filter((todo)=>(todo.id!=id)))
        console.log("Task deleted!")
    }
    let markDone =(id)=>{
        setTaskArr((prevArr)=>{
            return prevArr.map((todo)=>{
                if(todo.id===id){
                    return {...todo,isCompleted:!todo.isCompleted}
                } else{
                    return {...todo}
                }
            })
        })
    }
    return (
        <>
            <input placeholder="Enter a Task" onChange={addNewTask} value={newTask}/>
            <button onClick={updateTodo}>Add Task</button>
            <ul className="task-list">
                {taskArr.map((todo)=>(
                    <div className="task-item">

                        {!todo.isCompleted ? <li key={todo.id}>{todo.task}</li> : <li style={{textDecoration:'line-through'}} key={todo.id}>{todo.task}</li>}

                        {!todo.isCompleted ? <button id="edit-btn" onClick={()=>(markDone(todo.id))}>Mark as done</button> : <button id="edit-btn" style={{backgroundColor:'#242424',color:'rgba(255, 255, 255, 0.87)',border:'2px solid rgba(255, 255, 255, 0.87)',borderRadius:'0.8rem'}} onClick={()=>(markDone(todo.id))}>Task Done</button>}
                        
                        <button id="delete-btn" onClick={()=>(deleteTask(todo.id))}>Delete</button>
                    </div>
                ))}
            </ul>

        
        </>
    )
}

export default TodoApp;