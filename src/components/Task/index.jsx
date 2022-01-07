import React from "react";
import './index.scss'
import {CgClose , CgInfo} from 'react-icons/cg'



export function Task({task , handleTaskClick  , handleDeleteTask}){
  

  function handleClick(props){
    go
  }

  return (
    <>
    <div className="task-container" style={task.completed ?  {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title"   onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      
 
      <div className="buttons-container">
        <a href={`/${task.title}`}>
          <button className="see-task-details" onClick={handleClick}>
            <CgInfo/>
          </button>
        </a>
        
        <button className="remove-task-button" onClick={() => handleDeleteTask(task.id)}>
          <CgClose/>
        </button>
      
      </div>
    </div>


    </>
  )
}