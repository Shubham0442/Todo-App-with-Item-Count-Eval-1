import React from "react";
import styles from "./addTask.module.css";

import { useState } from "react";
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
     

    const [value, setvalue] = useState("")
    const [todos, setTodos] = useState([]) 

    const handleChange =()=>{
      
    const data = {
      id: 1,
      text: value,
      done: true,
      count: 2
    }
    setTodos([...todos,data])
    setTodos("")
    }
  
  return (
    
     
      <div className={styles.todoForm} >
        <input data-cy="add-task-input" type="text" value={value} onChange={(e)=>setvalue(e.target.value)}/>
        <button data-cy="add-task-button" onClick={handleChange} >+</button>
      </div>
    
  );
};

export default AddTask;
