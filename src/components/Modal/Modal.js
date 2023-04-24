import React from 'react';
import classes from "./Module.module.css";
import Button from "../button/Button";


function Modal({handleShow, setNewTask, handleAddTasks}) {

    return (
        <>
        <div  onClick={handleShow} className={classes.modalWrapper}></div>
        <div className={classes.modalContent}>
            <input
                onChange={(event)=>setNewTask(event.target.value)} type="text" name="task"/>
            <Button handleClick={handleAddTasks} >
                <p>Добавить Task</p>
            </Button>
        </div>


        </>
    );
}

export default Modal;