import React from 'react';
import  classes from './Input.module.css'
function Input({ name, placeholder, onChange }) {
    const onChanges = (event)=>{
        onChange(event.target.value)

    }



    return (
        <div>

            <input className={classes.inp}
                type={"text"}
                name={name}
                placeholder={placeholder}
                onChange={onChanges}
            />

        </div>
    );
}

export default Input;