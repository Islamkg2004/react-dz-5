import React, {useState} from 'react';
import  classes from './Todocard.module.css'


function TodoCard({task,handleDone,handleDelete, handleSelectEdit,isEdit,handleEdit,handleCancel}) {
    const [newTitle, setNewTitle] = useState(task.title)
    const handleNewTitle = (title) =>{
        setNewTitle(title)
    }




    if(isEdit) {
        return (
            <div>
                <input onChange={(event) => handleNewTitle(event.target.value)}
                       value={newTitle}
                       placeholder='edit'
                       type="text"/>
                <button onClick={()=>handleEdit({
                    ...task, title: newTitle
                })}>
                    Save
                </button>
                <button  onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        )
    } else {
        return (
            <div className={task.completed ? `${classes.todoCard} ${classes.done}` : classes.todoCard}>
                <h4>
                    {task.title}
                </h4>
                <button onClick={()=> handleDone(task.id)}
                        className={classes.copmleted}>
                    Done
                </button>
                <button className={classes.delete}
                        onClick={() => handleDelete(task.id)}>
                    Delete
                </button>
                <button onClick={()=> handleSelectEdit(task.id)}>
                    edit
                </button>

            </div>
        );
    }

}

export default TodoCard;