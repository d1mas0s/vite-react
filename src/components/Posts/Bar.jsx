import { useState } from "react";

const Bar = ({posts, page, setPage, lastPage}) => {
    const l = lastPage;

    const [iValue, setiValue] = useState("");
    const [popTog, setPopTog] = useState(false);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!(+iValue.isNaN) && +iValue>=1 && +iValue<=l) setPage(+iValue);
  }

    if (posts.length != 0) return (
      <>
        <button className={page!=1?"PagiButton":"PagiButtonDisabled"} disabled={page==1} onClick={page>1?()=>setPage(page-1):()=>setPage(1)}>prev</button>
        
        <button className={page%2==1&&page<l-1?"PagiButtonActive":"PagiButton"}
        onClick={()=>setPage(page!=l&&page!=l-1?(page%2==1?page:page-1):l-3)}>
        {page!=l&&page!=l-1?(page%2==1?page:page-1):l-3}</button>
       
        <button className={page%2==0&&page<l-1?"PagiButtonActive":"PagiButton"}
        onClick={()=>setPage(page!=l&&page!=l-1?(page%2==0?page:page+1):l-2)}>
        {page!=l&&page!=l-1?(page%2==0?page:page+1):l-2}</button>
        
        <button className="PagiButton" onClick={()=>{setPopTog(!popTog);setiValue("")}}>...</button>

        <button className={page==l-1?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l-1)}>{l-1}</button>
        <button className={page==l?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l)}>{l}</button>

        <button className={page!=l?"PagiButton":"PagiButtonDisabled"} disabled={page==l} onClick={page<l?()=>setPage(page+1):()=>setPage(l)}>next</button>
        
        <div className={popTog?"PopupOn":"PopupOff"}>
          <form onSubmit={handleSubmit}>
            <input className="Input" type="text" value={iValue} onChange={(e) => setiValue(e.target.value)} />
            <button className="PagiButton" type="submit">go</button>
          </form>
        </div>
      </>
    );
  };
  
  export default Bar;