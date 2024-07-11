import { Fragment, useState } from "react";
import Input from "../components/Todo/Input";
import List from "../components/Todo/List";
//import Task from "./assets/Task";
import './assets/style.css'

function Todo() {
    const [inputed, setInputed] = useState("")
    const [tasks, setTasks] = useState([])

    console.log(inputed);
    console.log(tasks);

    const addTask = () => {
        const _task = {
            id: Math.random(),
            value: inputed,
            toggled: false,
            editing: false
        }
        let _newTasks = [_task, ...tasks]
        setTasks(_newTasks)
        setInputed("")
    }

    const delTask = (id) => {
        let _newTasks = tasks.filter(e => e.id !== id)
        setTasks(_newTasks)
    }

    const togTask = (id) => {
        let _newTasks = tasks.map(e => e.id === id ? {...e, toggled: !e.toggled} : {...e})
        setTasks(_newTasks)
    }

    const editTask = (id) => {
        let _newTasks = tasks.map(e => e.id !== id ? {...e, editing: false } : {...e, editing: !e.editing})
        setTasks(_newTasks)
        console.log(tasks);
    }

    return (
      <Fragment className="Todo">
        <Input addTask={addTask} inputed={inputed} setInputed={setInputed} />
        <List tasks={tasks} delTask={delTask} togTask={togTask} editTask={editTask}/>
      </Fragment>
    )
  }
  
  export default Todo;