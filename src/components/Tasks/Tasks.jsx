import React from "react";
import { useState } from "react";
import TaskApp from "../TaskApp";
import TaskHeader from "../TaskHeader/TaskHeader";
import styles from "./tasks.module.css";

import  Counter  from "../Counter/Counter.jsx";
const Tasks = ({todo,onDelete,tasks}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  console.log(isCompleted)
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
      <div>
          <input type="checkbox" checked={isCompleted} onChange={(e)=>setIsCompleted(e.target.checked)}/>
        </div>
        <div className={isCompleted ? styles.underlined :"" }>{todo.value} </div>
        <div><Counter initialValue={0}/></div>
        <div>
          <button onClick={()=>onDelete(todo.id)}>x</button>
        </div>
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
