import React from "react";
import {Task} from '../Task'

export function Tasks({tasks , handleTaskClick , handleDeleteTask}){

  return (
    <>
      {
        tasks.map(task => <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleDeleteTask={handleDeleteTask}/>)
      }

    </>
  )
}