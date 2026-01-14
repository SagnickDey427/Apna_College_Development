import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentsForm";


export default function CommentsTab(){
    let [comments,setComments] = useState([]);
    let addComment = (comment)=>{
        setComments((currComments)=>([...currComments,comment]))
    }

    return (
        <>
            <CommentForm addCommentHandler ={addComment}/>
            <div className="comments-tab">
                {comments.map((comment)=>(<Comment username={comment.username} remarks={comment.remarks} rating={comment.rating}/>))}
            </div>
        </>
    )
}