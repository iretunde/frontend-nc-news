import { useEffect } from "react";

const DeleteComment = ({ comment_id, setFetchComments }) => {
    const handleClick = () => {
        console.log(`Temporary Print statement and comment id: ${comment_id}`);
        setFetchComments((prev) => prev + 1)
    };

        // useEffect(() => {
    //     fetch(`https://nc-news-0g8q.onrender.com/api/comments/${comment_id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`Error: ${response.status}`);
    //         }
    //         console.log("Comment deleted successfully");
    //     })
    //     .catch(error => {
    //         console.error("Error deleting comment:", error);
    //     });
    // }, []); // No dependencies

    return (
        <>
            <button
                onClick={handleClick}
                style={{
                    marginLeft: "10px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    color: "black",
                }}
            >
                Delete Comment
            </button>
        </>
    );
};

export default DeleteComment;






 
