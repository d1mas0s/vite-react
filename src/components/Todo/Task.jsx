
const Task = ({value, toggled, id, editing, togTask, delTask, editTask}) => {
        let finValue = value
    return (
        <>
            <div className={toggled?"TaskPlateDone":"TaskPlateUndone"} key={id}>
                <input className={editing?"TaskTextContainerOpen":"TaskTextContainerClosed"} value={finValue} disabled={!editing}/>
                <input className="TaskDetail" type="checkbox"
                onClick={() => togTask(id)}
                defaultChecked={toggled}/>
                <button className="TaskDetail" onClick={() => delTask(id)}>x</button>
                <input className="TaskDetail" type="checkbox" onClick={() => editTask(id)} defaultChecked={editing} checked={editing}/>
            </div>
        </>
    )
}

export default Task;