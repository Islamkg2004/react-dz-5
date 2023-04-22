import React from 'react';
import classes from  './container.module.css'
function Container({children}) {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
}

export default Container;