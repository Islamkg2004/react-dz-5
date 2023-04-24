import React from 'react';
import  classes from './Todocard.module.css'


function TodoCard({task,handleDone,handleDelete}) {
    return (
        <div className={task.completed ? `${classes.todoCard} ${classes.done}` : classes.todoCard}>
            <h4>
                {task.title}
            </h4>
            <button onClick={()=> handleDone(task.id)} className={classes.copmleted}>
                Done
            </button>
            <button className={classes.delete} onClick={() => handleDelete(task.id)}>
                Delete
            </button>

        </div>
    );
}

export default TodoCard;