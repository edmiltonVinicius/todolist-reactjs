import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    // o hook params recebe os parametros da url
    const params = useParams()

    // metodo goback simula o clique de voltar do navegador tooooop
    const history = useHistory()
    const handleButtonBack = () => {
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleButtonBack}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-conatiner">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet conescupter
                    Lorem ipsum, dolor sit amet conescupter
                </p>
            </div>
        </>
    )
}
 
export default TaskDetails;