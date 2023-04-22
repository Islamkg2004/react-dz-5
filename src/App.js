import Modal from "./components/Modal/Modal";
import {useState} from "react";
import classes from "./App.module.css";
import Container from "./components/container/Container";
import Button from "./components/button/Button";
import List from "./components/List/List";
import Input from "./components/Input/Input";
function App() {


    const [isShow, setIsShow] = useState(false)
    // const  [count, setCount] = useState(1);
    const handleShow = () => {
        setIsShow(!isShow)
        console.log(isShow, "isShow")

    }
    const  [task,setTask] = useState([
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ])
    // const handleAdd = () =>{
    //     setCount((prevState)=> prevState += 1 )
    // }
    // const handleMinus = () =>{
    //     setCount((prevState)=> prevState -= 1 )
    // }
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };





    return(
        <>
            <Container>
                <div className={classes.wrapper}>
                    {isShow && <Modal hadnlShow={handleShow}/>}
                    {/*<h2>{count}</h2>*/}
                <Button handleClick={handleShow}>
                    <p>
                        Добавить
                    </p>
                </Button>

                    {/*<button onClick={handleAdd}> add</button>*/}
                    {/*<button onClick={handleMinus}> minus</button>*/}

                <List
                    list={task}
                />
                </div>

                <Input
                    name="searchInput"
                    placeholder="Search for something"
                    onChange={handleSearchChange}
                />
                <h2> {searchValue}</h2>
            </Container>
        </>

    )
}

export  default App;