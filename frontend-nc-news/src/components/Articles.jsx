import React from "react";
import Logo from './Logo';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Articles = () => {  
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://nc-news-0g8q.onrender.com/api/articles')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setArticles(data.articles)
        })

    }, [])

    return (
        <>
        <h1 style={{ textDecoration: 'underline' }}>Articles List</h1>
        <Logo />
        <ol>
            {articles.map((article) => (                
                <li>
                    <Link to={`/articles/${article.article_id}`} key={article.article_id}>{article.title} </Link>
                </li>

            ))}
        </ol>
        </>
    );
};

export default Articles;  