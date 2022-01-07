import React, { useEffect, useState } from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import axios from 'axios'


import'./AppStyle.scss'




import { AddButtonTask } from "./components/AddInputTask";
import {Tasks} from './components/Tasks'
import {v4 as uuid} from 'uuid'
import { AllComponent } from "./components/AllComponent";
import { TaskDetails } from "./components/TaskDetails";

function App() {
  const [tasks , setTask] = useState([
    {
      id: "1",
      title: "estudar programaçao",
      completed: false
    },
    {
      id:"2",
      title: "almoçar",
      completed: true
    }
  ])

 


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks , {
      title: taskTitle,
      id: uuid(),
      completed: false
    }]
    console.log('chegou aqui')
    setTask(newTasks)
  }



  const  handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId ) return {...task, completed: !task.completed}
      return task
    })  
    setTask(newTasks)
  }


  function handleDeleteTask(taskId){
    const newTask = tasks.filter(task => task.id !== taskId)
    console.log(taskId)
    setTask(newTask)
  }
  /*
    <AddButtonTask handleTaskAddition={handleTaskAddition} />
    <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleDeleteTask={handleDeleteTask}/>
  */

  useEffect(() => {
    async function fetchTask(){
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10') 

      setTask(data)
    }

    fetchTask()
  },[])

  return (

      <div className="container">

        
        <h1>Minhas Tarefas</h1>
   
        <Router>
          <Routes>
            <Route 
                path="/" 
                element={<AllComponent 
                tasks={tasks} 
                handleTaskClick={handleTaskClick}
                handleDeleteTask={handleDeleteTask}
                handleTaskAddition={handleTaskAddition}
            />}/>
            <Route path="/:taskTitle" element={<TaskDetails/>}/>      
            </Routes>      
        </Router>
        
      </div>

  )
}

export default App