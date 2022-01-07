import './index.scss'
import {Button} from '../Button'
import { useParams } from 'react-router'

export function TaskDetails(){

  const params = useParams()
  
  return(
    <>
      <div className="back-button-container">
        <a href="/">
          <Button>Voltar</Button>
        </a>
      </div>

      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum nostrum voluptatibus accusantium quisquam velit.</p>
      </div>
    </>
  )
}