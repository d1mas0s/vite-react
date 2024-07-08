

const Task = (props) => {
        let finValue = props.value
    return (
        <div className={props.toggled?"TaskPlateDone":"TaskPlateUndone"} key={props.id}>
            <input className={props.editing?"TaskTextContainerOpen":"TaskTextContainerClosed"} value={finValue} disabled={!props.editing}/>
            <input className="TaskDetail" type="checkbox"
            onClick={()=>props.togTask(props.id)}
            defaultChecked={props.toggled}/>
            <button className="TaskDetail" onClick={()=>props.delTask(props.id)}>x</button>
            <input className="TaskDetail" type="checkbox" onClick={()=>props.editTask(props.id)} defaultChecked={props.editing} checked={props.editing}/>
        </div>
    )
}

export default Task;