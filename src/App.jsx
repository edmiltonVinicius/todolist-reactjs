import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'    
import TaskDetails from './components/TaskDetails'

import './App.css'

const App = () => {
    // tasks é a variavel, setTasks é a função que manipula o estado de tasks, e o array ou qualquer coisa dentro do useState é o valor inicial de tasks
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        // Criado uma função para chamar a API com asyn await
        const fetchTasks = async () => {
            // Destructuring apenas o data do response do axios
            const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=3')
            
            // Setamos o state com os dados da reponse da API
            setTasks(data)
        }

        fetchTasks()

    }, [])
    
    const handleTaskClick = (taskId) => {
        const newTask = tasks.map((task) => {
            if(task.id === taskId) return {...task, completed: !task.completed}        

            return task
        })

        setTasks(newTask)
    }

    const handeTaksAddition = (taskTitle) => {
        const newTasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false
        }]

        setTasks(newTasks)
    }


    const handleTaskDelete = (taskId) => {
        const tasksUpdated = tasks.filter(task => task.id !== taskId)
        setTasks(tasksUpdated)
    }

    return (
        // Quando tivermos mais de um elemento para retornar por exemplo uma div e um botão ou seja dois botões, usar esse <> </> ou colocar tudo dentro de uma div
        // <>   Aqui não estou usando, pois estou usando o Router (BrowserRouter)
        <Router>
            <div className="container">
                <Header />
                {/* Aqui chamamos a arrow function () => () com parenteses e não chaves, isso
                é um atalho para () => { return { }} */}
                <Route path="/" exact render={() => (
                    <>
                        <AddTask handeTaksAddition={handeTaksAddition} />
        
                        {/* 
                            Estamos passando a variavel tasks como parametro para o component Tasks (props) 
                            o nome do parametro 'tasks' o mesmo nome que será utilizado para ser acessado no componente que está sendo chamado
                        */}
                        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
                    </>
                )}/>

                {/* O path da rota recebe um parametro igual no node */}
                {/* Para essa rota estamos renderizando um componente então usamo o component e não o render */}
                <Route path="/:taskTitle" exact component={TaskDetails}/>
            </div>
        </Router>
        // </>
    )
}

export default App