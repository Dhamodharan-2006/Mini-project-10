import React,{useState,useCallback} from 'react'
import Lists from './Lists';

function UsecallbacksComponent() {
    const[number,setNumber]=useState(1);
    const[dark,setDark]=useState(false);

const themestyle={
   
      backgroundColor:dark?'black':'white',
      color:dark?'white':'black'
    
  }

  const getItem=useCallback(()=>{
    return[number,number+1,number+2]
  },[number])

  return (
    <>
    <div>
      UsecallbackComponent
    </div>
    <div style={themestyle}>


        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />

        <button onClick={()=>setDark((prevDark)=>!prevDark)}>Change theme</button>
        <hr />

        <Lists getItems={getItem}></Lists>
    </div>
    </>
  )
}

export default UsecallbacksComponent
