import { useState } from "react"


export default function CommentForm({addCommentHandler}){
    let [formData, setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    })
    let handleChange = (event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData(()=>{
            return {...formData,[fieldName]:newValue}
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        addCommentHandler(formData);
        setFormData({
            username:"",
            remarks:"",
            rating:5
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input placeholder="Enter username" name="username" onChange={handleChange} id="username" value={formData.username}/>
            <br />
            <label htmlFor="remarks">Remarks : </label>
            <br />
            <textarea name="remarks" id="remarks" value={formData.remarks} onChange={handleChange} placeholder="Enter your thoughts"></textarea>
            <br />
            <label htmlFor="rating">Rating : </label>
            <select name="rating" onChange={handleChange} id="rating" value={formData.rating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Submit</button>
        </form>
    )
}