import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = ({ closeForm, setFetchComments }) => {
    const [comment, setComment] = useState("");
    const { article_id } = useParams(); // Get the article_id from the route

    const handleSubmit = (e) => {
        e.preventDefault();

        // Define the comment data with the specified username
        const commentData = {
            username: "cooljmessy",  // Updated username
            body: comment,
        };

        // POST request to the API endpoint if the comment is not empty
        if (comment.trim().length > 0) {
            fetch(`https://nc-news-0g8q.onrender.com/api/articles/${article_id}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentData),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to post comment");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Comment posted:", data.comment);
                setComment(""); // Clear the input field after successful submission
                setFetchComments((prev) => prev + 1)
                closeForm(); // Close the form
            })
            .catch((error) => {
                console.error("Error posting comment:", error);
            });
        } else {
            alert("Please enter a comment before submitting.");
        }
    };

    return (
        <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            width: "480px"
        }}>
            <h3>Post Comment:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter your comment"
                    style={{ 
                        display: "block", 
                        marginBottom: "10px", 
                        width: "80%", 
                        padding: "8px 8px 4px 8px", 
                        margin: "0 auto" 
                    }}
                />
                <button 
                    type="button" 
                    onClick={closeForm} 
                    style={{ 
                        border: "1px solid black", 
                        marginRight: "10px" 
                    }}
                >
                    Close Form
                </button>
                <button 
                    type="submit" 
                    style={{ 
                        border: "1px solid black" 
                    }}
                    disabled={comment.trim().length === 0} // Disable button if comment is empty
                >
                    Submit Form
                </button>
            </form>
        </div>
    );
};

export default PostComment;
