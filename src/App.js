import Modal from "./components/Modal/Modal";
import React, {useState } from "react";
import classes from "./App.module.css";
import Container from "./components/container/Container";
import Button from "./components/button/Button";
import TodoCard from "./components/TodoCard/TodoCard";
function App() {

    const [isShow, setIsShow] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState('')
    const [currentEdit, setCurrentEdit] = useState('')
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

// const handleSearch = (event) =>{
// setSearch(event.target.value)
// }
// const  fileteredTask = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))

    const handleDelete = (id) => {
        const deletedList =  tasks.filter((task)=> task.id !==id)
        setTasks([...deletedList])
    }

const handleEdit   = (editTask) => {
setCurrentEdit(null)
    const editList = tasks.map(task => {
        if (task.id === editTask.id) {
            return editTask
        } else return  task
    })
    setTasks([...editList])
}
const handleCancel = (currentEdit) =>{
    setCurrentEdit( currentEdit =  null)
    console.log(currentEdit, 'hi')
}

    const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(search.toLowerCase()) &&
            (filter === 'all' || (filter === 'true' && task.completed) || (filter === 'false' && !task.completed));
    });
const user = {
    name:'Islam',
    position:'Frontend'

}
    localStorage.setItem('taskList', JSON.stringify(user))
    localStorage.removeItem('taskList')

    return(
        <>
            <Container>
                <div className={classes.wrapper}>
                    {isShow && <Modal
                        setNewTask={setNewTask}
                        handleAddTasks={handleAddTasks}
                        handleShow={handleShow}/>}
                    <select value={filter} onChange={event => setFilter(event.target.value)} >
                        <option value="all">Все таски</option>
                        <option value="true">Выполненные</option>
                        <option value="false">Не выполненные</option>
                    </select>
                <Button handleClick={handleShow}>
                    <p>
                        Добавить
                    </p>
                </Button>
                    <input type="text" name="search" placeholder="Поиск" onChange={event => setSearch(event.target.value)}
                    />
                    {filteredTasks.map(task =>
                        <TodoCard
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                            handleSelectEdit={setCurrentEdit}
                            handleEdit={handleEdit}
                            handleCancel={handleCancel}
                            task={task}
                            isEdit={ currentEdit === task.id}
                            key={task.id}/>) }
                </div>


            </Container>
        </>

    )
}

export  default App;