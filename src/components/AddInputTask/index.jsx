import React, { useState } from "react";
import { Button } from "../Button";
import "./index.scss"

export function AddButtonTask({handleTaskAddition}){
  const [inputData , setInputData] = useState('')

  function handleInputChange(e){
    setInputData(e.target.value)
  }

  function handleAddTaskClick(){
    handleTaskAddition(inputData)
    setInputData('')
  }

  return(
    <div className="addInputTaskContainer">
      <input 
        onChange={handleInputChange}  
        className="add-taskInput" 
        type="text" 
        value={inputData}
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>
          Adicionar
        </Button>
      </div>
    

    </div>
  )
}