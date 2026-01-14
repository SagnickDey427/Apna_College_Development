import "./Comment.css";

export default function Comment({username, remarks, rating}){
    return (
        <div className="comment-box">
            <p>{username}</p>
            <p>{remarks}</p>
            <p>{rating} stars</p>
        </div>
    )
}