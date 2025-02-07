import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "./Logo";
import ViewComment from "./ViewComment";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import PostComment from "./PostComment"; // Import PostComment component

const SpecificArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const [showPostComment, setShowPostComment] = useState(false);
    const [fetchComments, setFetchComments] = useState(0)

    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles/${article_id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.msg !== undefined) {
                    return Promise.reject(data);
                }
                setArticle(data.article[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
            });
    }, [article_id]);

    if (error) {
        return <ErrorComponent message={error.msg} />;
    }

    // Toggle comments view
    const handleToggleComments = () => {
        setShowComments((prevShowComments) => !prevShowComments);
    };

    // Function to close the PostComment form
    const closePostComment = () => {
        setShowPostComment(false);
    };

    if (isLoading) {
        return (
            <>
                <Logo />
                <Loading />
            </>
        );
    }

    return (
        <>
            <Logo />
            <h1>{article.title}</h1>
            <h2>
                Topic: <span style={{ color: "#d2b48c" }}>{article.topic}</span>
            </h2>
            <div className="article-body">{article.body}</div>

            {/* Toggle comments */}
            <button className="toggle-comments-button" onClick={handleToggleComments}>
                {showComments ? "Hide Comments" : "View Comments"}
            </button>

            {/* Post comment button */}
            <button style={{ border: "1px solid black", marginLeft: "10px" }} onClick={() => setShowPostComment(true)}>
                Post Comment
            </button>

            {/* Render PostComment if showPostComment is true */}
            {showPostComment && <PostComment closeForm={closePostComment} setFetchComments={setFetchComments} />}

            {/* Conditionally render ViewComment component */}
            {showComments && <ViewComment articleId={article_id} fetchComments={fetchComments} setFetchComments={setFetchComments} />}
        </>
    );
};

export default SpecificArticle;
