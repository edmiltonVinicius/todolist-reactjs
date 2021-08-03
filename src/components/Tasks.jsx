import React from 'react'
import Task from './Task'

/* 
    como parametro props de um component é um objeto, eu desestruturo pegando apenas oque eu quero, 
    no caso as tasks, pois foi que o componente pai passou como props (parametros)
*/
const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    return (
        <>
            { tasks.map(task => <Task task={task} key={task.id} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>) }
        </>
    )
}

export default Tasks