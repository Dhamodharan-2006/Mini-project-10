import React,{useState,useEffect} from 'react'

function UseStateUseEffect() {
  const [text,setText]=useState("posts")
  const [posts,setPosts]=useState([])

  const fetchPosts=async()=>{
    try{
      const response=await fetch(`https://jsonplaceholder.typicode.com/${text}`)
      if(!response.ok){
        throw new Error("failed")
      }
      const data=await response.json();
    }
    catch(error){
      console.log("error")
    }
    finally{
      console.log("finally")
    }
  }
  useEffect(()=>{
    console.log("useEffect is called")

    fetchPosts();
  },[text])
  return (
    <>
    <div>Usestate and useeffect</div>

    <hr/>
    <button onClick={()=>setText("posts")}>Posts</button>
    <button onClick={()=>setText("comments")}>comments</button>
    <button onClick={()=>setText("albums")}>albums</button>

  </>)
}

export default UseStateUseEffect
