import React, { useState } from "react";

const CommentCard = ({ comments }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    
    // Store initial votes from each comment to track local state without changing the original comments array
    const [localVotes, setLocalVotes] = useState(
        comments.reduce((acc, comment) => {
            acc[comment.comment_id] = comment.votes;
            return acc;
        }, {})
    );

    // Track the voting state (1 for upvote, -1 for downvote, 0 for neutral) for each comment
    const [voteState, setVoteState] = useState({});

    const showPopupMessage = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    // Function to handle the PATCH request to the server
    const updateVoteOnServer = (commentId, incVotes) => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles/${commentId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inc_votes: incVotes }),
        })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error updating vote on server:", error);
            // Revert the vote locally if the request fails
            setLocalVotes((prevVotes) => ({
                ...prevVotes,
                [commentId]: prevVotes[commentId] - incVotes,
            }));
        });
    };

    // Handle Vote Up functionality
    const handleVoteUp = (commentId) => {
        const currentVote = voteState[commentId] || 0;

        if (currentVote === 1) {
            showPopupMessage("You already clicked on the 'Vote Up' Button");
        } else {
            const newVoteCount = 1

            // Update the local votes and state immediately
            setLocalVotes((prevVotes) => ({
                ...prevVotes,
                [commentId]: prevVotes[commentId] + 1,
            }));
            setVoteState((prevState) => ({
                ...prevState,
                [commentId]: currentVote === -1 ? 0 : 1,
            }));

            // Update the server with the actual vote change (+1 or -1)
            updateVoteOnServer(commentId, newVoteCount);
        }
    };

    // Handle Vote Down functionality
    const handleVoteDown = (commentId) => {
        const currentVote = voteState[commentId] || 0;

        if (currentVote === -1) {
            showPopupMessage("You already clicked on the 'Vote Down' Button");
        } else {
            const newVoteCount = -1

            // Update the local votes and state immediately
            setLocalVotes((prevVotes) => ({
                ...prevVotes,
                [commentId]: prevVotes[commentId] + -1,
            }));
            setVoteState((prevState) => ({
                ...prevState,
                [commentId]: currentVote === 1 ? 0 : -1,
            }));

            // Update the server with the actual vote change (-1 or +1)
            updateVoteOnServer(commentId, newVoteCount);
        }
    };

    const Popup = () => (
        <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000
        }}>
            <p>{popupMessage}</p>
            <button onClick={closePopup} style={{ marginTop: "10px" }}>Close</button>
        </div>
    );

    return (
        <>
            <ol>
                {comments.map((comment) => (
                    <li key={comment.comment_id} className="comment-item">
                        <div>{comment.body}</div>

                        <div>
                            Author: <span style={{ color: "blue" }}>{comment.author}</span>
                        </div>

                        <div>
                            Votes: <span style={{ color: "blue" }}>{localVotes[comment.comment_id]}</span>

                            <button
                                style={{
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    backgroundColor: voteState[comment.comment_id] === 1 ? "lightgreen" : "white",
                                }}
                                onClick={() => handleVoteUp(comment.comment_id)}
                            >
                                Vote Up
                            </button>

                            <button
                                style={{
                                    marginLeft: "10px",
                                    border: "1px solid black",
                                    backgroundColor: voteState[comment.comment_id] === -1 ? "red" : "white",
                                    color: voteState[comment.comment_id] === -1 ? "white" : "black",
                                }}
                                onClick={() => handleVoteDown(comment.comment_id)}
                            >
                                Vote Down
                            </button>
                        </div>
                    </li>
                ))}
            </ol>

            {showPopup && <Popup />}
            
            {showPopup && (
                <div onClick={closePopup} style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 999
                }} />
            )}
        </>
    );
};

export default CommentCard;
