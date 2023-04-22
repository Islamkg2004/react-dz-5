import React from 'react';
import  classes from  './List.module.css'
function List({list}) {
    const tasks = list.map((task) => (
        <li key={task.id}> {task.task}</li>
    ));



    return (
        <div className={classes.inner}>
            <h2>Tasks:</h2>
            <ul className={classes.list}>{tasks}</ul>

        </div>
    );
}

export default List;
