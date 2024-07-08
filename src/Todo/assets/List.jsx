import Task from "./Task";

const List = (props) => {
    const taskList = props.tasks.map(e => <Task key={e.id} id={e.id} value={e.value} toggled={e.toggled} editing={e.editing} delTask={props.delTask} togTask={props.togTask} editTask={props.editTask}/>)
    return (
        <div className="FlexList">
            {taskList}
        </div>
    )
}

export default List;