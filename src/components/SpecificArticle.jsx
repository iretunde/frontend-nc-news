import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "./Logo";
import ViewComment from "./ViewComment";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent"

const SpecificArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    const [showComments, setShowComments] = useState(false); // State to control the comment view

    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles/${article_id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.msg !== undefined){
                    return Promise.reject(data)
                }
                setArticle(data.article[0]);
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err);
              });
            }, [article_id])


  if (error) {
    return <ErrorComponent message={error.msg} />;
  }
    // Toggle comment view on button click
    const handleToggleComments = () => {
        setShowComments((prevShowComments) => !prevShowComments);
    };

    if (isLoading){
        return (
            <>
            <Logo />
            <Loading />
            </>
        )
    }

    return (
        <>
            <Logo />
            <h1>{article.title}</h1>
            <h2>
                Topic: <span style={{ color: "#d2b48c" }}>{article.topic}</span>
            </h2>
            <div className="article-body">{article.body}</div>

            {/* Button to toggle comments */}
            <button className="toggle-comments-button" onClick={handleToggleComments}>
                {showComments ? "Hide Comments" : "View Comments"}
            </button>

            {/* Conditionally render the ViewComment component */}
            {showComments && <ViewComment articleId={article_id} />}
        </>
    );
};

export default SpecificArticle;
