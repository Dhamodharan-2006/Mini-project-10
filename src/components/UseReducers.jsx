import React,{useState,useReducer} from 'react'

function reducer(state,action){
switch(action.type){
    case 'increment':
   return {count :state.count+1}
   case 'decrement':
    return {count :state.count-1}
    default:
        return state     
}
}



function UseReducers() {

    // const[count,setCount]=useState(0)
    const[state,dispatch]=useReducer(reducer,{count:0})

    function increment(){
        // setCount(prevCount=>prevCount+1)
        dispatch({type:'increment'})
    }

     function decrement(){
        // setCount(prevCount=>prevCount-1)
         dispatch({type:'decrement'})
    }
  return (
    <div>
      UseReducers <br />

      <button onClick={decrement}>-</button>

      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseReducers
