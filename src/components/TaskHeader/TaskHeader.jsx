import React,{useState} from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./taskHeader.module.css";
import tasks from "../data/tasks.json"
const TaskHeader = () => {
  // sample values to be replaced
  
  const [value,setValue] = useState("");
  const [todos,setTodos] = useState([]);
  const onDelete = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id );
    setTodos(newTodos);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.TaskHeader}>
      <b data-cy="header-remaining-task"></b>
      <b data-cy="header-total-task"></b>
      <div className={styles.taskHeader}>
        <h1>Todo List</h1>
        <p>{`You have ${todos.length}  of ${todos.length} tasks remaining`}</p>
      </div>
      <div className={styles.inputtag}>
        <input  type="text" value={value} placeholder="Add task..." onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>{setTodos([...todos,{id:Date.now(),value:value}]); setValue("")}}>+</button>
      </div>
      
      <div>
        {todos.map((todo)=>(<Tasks key={todo.id} todo={todo} onDelete={onDelete} tasks = {tasks}/>))}
      </div>
    </div>
  );
};

export default TaskHeader;
