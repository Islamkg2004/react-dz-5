import React, {useState} from 'react';
import classes from "./Module.module.css";
import Input from "../Input/Input";



function Modal({hadnlShow}) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };
    const  handleChangeInput = (e) => {
        console.log(e.target.value,"event")
    }

    return (
        <>
        <div  onClick={hadnlShow} className={classes.modalWrapper}></div>
        <div className={classes.modalContent}>
            <input onChange={handleChangeInput} type="text" name="task"/>
            <Input
                name="searchInput"
                placeholder="Search for something"
                onChange={handleSearchChange}
            />
            <h2> {searchValue}</h2>
        </div>


        </>
    );
}

export default Modal;