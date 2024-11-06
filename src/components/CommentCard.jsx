import React from "react";

const CommentCard = ({comments}) => {
    return (
        <>
         <ol>
            {comments.map((comment, indx) => (                
                <li key={comment.comment_id} className="comment-item">
                    <div>{comment.body}</div>

                    <div>
                        Author: <span style={{ color: "blue" }}>{comment.author}</span>
                    </div>

                    <div>
                        Votes: <span style={{ color: "blue" }}>{comment.votes}</span>
                    </div>
                </li>

            ))}
        </ol>       
        </>
    )

}

export default CommentCard;