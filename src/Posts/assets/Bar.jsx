
const Bar = ({page, setPage, lastPage}) => {
    const l = lastPage;
    return (
      <div>
        <button className="PagiButton" onClick={page>1?()=>setPage(page-1):()=>setPage(1)}>prev</button>
        
        <button className={page==1?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(1)}>1</button>
        <button className={page==2?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(2)}>2</button>
        {/* <input onChange={(e)=>setPage(e.target.value)}></input> */} 
        <button className={(page>2&&page<l-1)?"PagiButtonActive":"PagiButton"} >...</button>
        <button className={page==l-1?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l-1)}>{l-1}</button>
        <button className={page==l?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l)}>{l}</button>

        <button className="PagiButton" onClick={page<l?()=>setPage(page+1):()=>setPage(l)}>next</button>
      </div>
    );
  };
  
  export default Bar;