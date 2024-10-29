import { useState } from "react";
export function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");



    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value);
        }}></input><br></br>
        <input type="text" placeholder="description" onClick={function(e){
            const value =e.target.value;
            setDescription(e.target.value);
        }}></input><br></br>

        <button onClick={ ()=> {
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description 
                }),
                header:{
                    "contentType":"application/json"
                }
            })
            .then(async function (res) {
                const json = await res.json();
                alert("Added");
                
            })
        }}>add a To-do</button>


    </div>
}