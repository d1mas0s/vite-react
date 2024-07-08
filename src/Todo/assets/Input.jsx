

const Input = (props) => {
    return (
        <div className="InputPlate">
            <input className="InputTextContainer"
            value={props.inputed}
            onChange={(e)=>props.setInputed(e.target.value)}/>
            <button className="TaskDetail" onClick={()=>props.addTask()}>+</button>
        </div>
    )
}

export default Input;