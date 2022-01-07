import { AddButtonTask } from "../AddInputTask";
import { Tasks } from "../Tasks";


export function AllComponent({ tasks , handleTaskClick , handleDeleteTask , handleTaskAddition  }){
  console.log(tasks)
  return(
    <>
      <AddButtonTask 
        handleTaskAddition={handleTaskAddition}
      />
      <Tasks 
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleDeleteTask={handleDeleteTask}
      />

    </>
  )
}