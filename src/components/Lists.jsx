import React,{useEffect,useState} from 'react'

function Lists({getItems}) {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        setItems(getItems())
        console.log('calling')
    },[getItems]);
  return( 
    <div>
    
      {items.map((item)=>(<div key={item}>{item}</div>
      ))}
      </div>
     );
      }


export default Lists;
