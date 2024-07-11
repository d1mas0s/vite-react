import Task from "./Task";

const List = ({tasks, delTask, togTask, editTask}) => {
    const taskList = tasks.map(e => <Task key={e.id} id={e.id} value={e.value} toggled={e.toggled} editing={e.editing} delTask={delTask} togTask={togTask} editTask={editTask}/>)
    return (
        <div className="FlexList">
            {taskList}
        </div>
    )
}

export default List;