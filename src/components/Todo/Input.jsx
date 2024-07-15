
const Input = ({inputed, setInputed, addTask}) => {
    return (
        <>
            <div className="InputPlate">
                <input className="InputTextContainer"
                value={inputed}
                onChange={(e) => setInputed(e.target.value)}/>
                <button className="TaskDetail" onClick={() => addTask()}>+</button>
            </div>
        </>
    )
}

export default Input;