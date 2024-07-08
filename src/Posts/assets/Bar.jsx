
const Bar = (props) => {
    const l = props.lastPage;
    return (
      <div>
        <button className="PagiButton" onClick={props.page>1?()=>props.setPage(props.page-1):()=>props.setPage(1)}>prev</button>
        
        <button className="PagiButton" onClick={()=>props.setPage(1)}>1</button>
        <button className="PagiButton" onClick={()=>props.setPage(2)}>2</button>
        {/* <input onChange={(e)=>props.setPage(e.target.value)}></input> */} 
        <button className="PagiButton" onClick={()=>props.setPage(l-1)}>{l-1}</button>
        <button className="PagiButton" onClick={()=>props.setPage(l)}>{l}</button>

        <button className="PagiButton" onClick={props.page<l?()=>props.setPage(props.page+1):()=>props.setPage(l)}>next</button>
      </div>
    );
  };
  
  export default Bar;