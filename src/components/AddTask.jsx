import React, { useState } from 'react';

import Button from './Button';
import './AddTask.css'

const AddTask = ({ handeTaksAddition }) => {
    // Aqui criamos o state inputData e o setInputData que manipula o valor do state
    const [inputData, setInputData] = useState('')

    // Aqui criamos uma função que será executada sempre que o evento de change acontecer no input 
    // e setamos o state inputData com o valor do input
    const handeInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handeTaksAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-task-container">
            <input type="text" onChange={handeInputChange} className="add-task-input" value={inputData} />

            <div className="add-task-button-container">
                <Button className="add-button" onClick={handleAddTaskClick}>
                    ADICIONAR
                </Button>
            </div>
        </div>
    )
}
 
export default AddTask