import Modal from "./components/Modal/Modal";
import React, {useState} from "react";
import classes from "./App.module.css";
import Container from "./components/container/Container";
import Button from "./components/button/Button";
import TodoCard from "./components/TodoCard/TodoCard";
function App() {

    const [isShow, setIsShow] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [search, setSearch] = useState('')
    const [tasks, setTasks] = useState(
        [
            {
                id:1 ,
                title: 'coding',
                completed:false
            },
            {
                id:2,
                title: 'eat',
                completed:false
            },
            {
                id:3,
                title: 'sleep',
                completed:false
            },
            {
                id:4,
                title: 'coding',
                completed:false
            }
        ]
    )

    const handleShow = () => {
        setIsShow(!isShow)

    }
    const  handleAddTasks =()=>{
        if(newTask.length < 1 ){
            return
        }

        setTasks((prevState) => [...prevState,
            {
                id: Date.now(),
                title: newTask,
                completed: false
            }
        ])
        setNewTask('')
        handleShow()
    }
    const handleDone = (id) => {
      const newList = tasks.map(task => {
            if (task.id === id ) {
             return  {...task, completed: !task.completed}
            }else {
                return  task
            }
        })

        setTasks([...newList])
    }

const handleSearch = (event) =>{
setSearch(event.target.value)
}
const  fileteredTask = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))

    const handleDelete = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
    }



    return(
        <>
            <Container>
                <div className={classes.wrapper}>
                    {isShow && <Modal
                        setNewTask={setNewTask}
                        handleAddTasks={handleAddTasks}
                        handleShow={handleShow}/>}
                <Button handleClick={handleShow}>
                    <p>
                        Добавить
                    </p>
                </Button>
                    <input type="text" name="search" placeholder="Поиск" onChange={handleSearch}
                    />
                    {fileteredTask.map(task =>
                        <TodoCard
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                            task={task}
                            key={task.id}/>) }


                </div>


            </Container>
        </>

    )
}

export  default App;