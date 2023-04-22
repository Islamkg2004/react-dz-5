import React from 'react';
import  classes from  './button.module.css'
function Button({children, handleClick}) {
    return (
        <button onClick={handleClick } className={classes.button}>
            {children}
        </button>
    );
}

export default Button;