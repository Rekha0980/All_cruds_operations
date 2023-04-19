import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Add=()=>{
    const[title,setTitle]=useState("")
    const[note,setNote]=useState("")
    const [category,setCategory]=useState("")
    const handlesubmit=()=>{
        const payload={
            title,
            note,
            category,
            
        }
        //console.log(payload)
        fetch("http://localhost:8000/book/add",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                "Autherization":localStorage.getItem("token")
            }
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
 
    
    return(
        <div>
            <h3>Create Your Notes</h3>
            <Input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Input type="text" placeholder="Enter Note" value={note} onChange={(e)=>setNote(e.target.value)}/>
            <Input type="text" placeholder="Enter Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
       <Link to={"/"}><Button onClick={handlesubmit}>Create Note</Button></Link> 
        </div>
    )
}

export {Add}