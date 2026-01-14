import { useState } from "react"


export default function Form(){
    // let [fullName, setFullName] = useState("");
    // let handleFullName = (event)=>{
    //     setFullName(event.target.value);
    // }
    let [formVar, setFormVar] = useState({
        username:"",
        password:""
    })
    let handleChange = (event)=>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setFormVar(()=>{
            // formVar[fieldName] = fieldValue;
            // return {...formVar}
            return {...formVar,[fieldName]:fieldValue}
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formVar);
        setFormVar({
            username:"",
            password:""
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input placeholder="Enter username" onChange={handleChange} value={formVar.username} name="username" id="username"/>
            <br /><br />
            <label htmlFor="password">Password : </label>
            <input placeholder="Enter password" type="password" onChange={handleChange} value={formVar.password} name="password" id="password"/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}