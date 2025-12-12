import React,{useState,useEffect,useRef,useMemo} from 'react'

function UsememoHook() {
  const[number,setnumber]=useState(0);
  const[dark,setDark]=useState(false);

  const doubleNumber=slowFunction(number)

  
  const themestyle=useMemo(()=>{
    return{
      backgroundColor:dark?'black':'white',
      color:dark?'white':'black'
    }
  })
  useEffect(()=>{
    console.log("theme is changed")
    
  },[themestyle])
  return (
    <div>
      <input type="number" value={number} onChange={e=>setnumber(parseInt(e.target.value))} />

      <button onClick={()=>setDark(prevDark=>!prevDark)}>change Theme</button>

      <div style={themestyle}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num){
  for(let i=0;i<1000000;i++){}
  return num*2
}

export default UsememoHook
