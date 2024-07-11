
const Bar = ({posts, page, setPage, lastPage}) => {
    const l = lastPage;
    if (posts.length != 0) return (
      <>
        <button className="PagiButton" onClick={page>1?()=>setPage(page-1):()=>setPage(1)}>prev</button>
        
        <button className={page%2==1&&page<l-1?"PagiButtonActive":"PagiButton"}
        onClick={()=>setPage(page!=l&&page!=l-1?(page%2==1?page:page-1):l-3)}>
        {page!=l&&page!=l-1?(page%2==1?page:page-1):l-3}</button>
       
        <button className={page%2==0&&page<l-1?"PagiButtonActive":"PagiButton"}
        onClick={()=>setPage(page!=l&&page!=l-1?(page%2==0?page:page+1):l-2)}>
        {page!=l&&page!=l-1?(page%2==0?page:page+1):l-2}</button>
        
        <button className="PagiButton" >...</button>
        <button className={page==l-1?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l-1)}>{l-1}</button>
        <button className={page==l?"PagiButtonActive":"PagiButton"} onClick={()=>setPage(l)}>{l}</button>

        <button className="PagiButton" onClick={page<l?()=>setPage(page+1):()=>setPage(l)}>next</button>
      </>
    );
  };
  
  export default Bar;