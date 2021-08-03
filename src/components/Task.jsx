import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    const history = useHistory()

    // Iremos acessar a rota /task.tile ou seja passamos como parametro n title da task
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return ( 
        // Aqui temos um css inline, note que 'border-left' no React é "borderLeft" 
        <div className="task-container" style={ task.completed ? { borderLeft: "6px solid chartreuse" } : {} }>
            {/* Para chamar uma função dentro de um evento onclick, onchange, onmouse, etc... 
            fazmos dessa forma passamos um função que chama a funçãi que queremos executar */}
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
                    {/* Os ícones do react-icons são componentes */}
                    <CgClose />
                </button>
                
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
}
 
export default Task