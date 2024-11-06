import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";


const SpecificArticle = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles/${article_id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.article[0])
            setArticle(data.article[0])
            
        })

    }, [])

    return (
        <>
        <Logo />
        <h1>{article.title}</h1>
        <h2>Topic: <span style={{ color: '#d2b48c' }}>{article.topic} </span></h2>
        <div className="article-body">
            {article.body}
        </div>

        
        </>
    )
}

export default SpecificArticle;