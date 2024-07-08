
const Bar = ({page, setPage, lastPage}) => {
    const l = lastPage;
    return (
      <div>
        <button className="PagiButton" onClick={page>1?()=>setPage(page-1):()=>setPage(1)}>prev</button>
        
        <button className="PagiButton" onClick={()=>setPage(1)}>1</button>
        <button className="PagiButton" onClick={()=>setPage(2)}>2</button>
        {/* <input onChange={(e)=>setPage(e.target.value)}></input> */} 
        <button className="PagiButton" >...</button>
        <button className="PagiButton" onClick={()=>setPage(l-1)}>{l-1}</button>
        <button className="PagiButton" onClick={()=>setPage(l)}>{l}</button>

        <button className="PagiButton" onClick={page<l?()=>setPage(page+1):()=>setPage(l)}>next</button>
      </div>
    );
  };
  
  export default Bar;