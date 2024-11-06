import React from "react";
import Logo from './Logo';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Articles = () => {  
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://nc-news-0g8q.onrender.com/api/articles')
        .then((response) => response.json())
        .then((data) => {
            setArticles(data.articles)
            setIsLoading(false)
        })

    }, [])

    if (isLoading){
        return (
            <>
            <h1 style={{ textDecoration: 'underline' }}>Articles List</h1>
            <Logo />
            <Loading />
            </>
        )
    }

    return (
        <>
        <h1 style={{ textDecoration: 'underline' }}>Articles List</h1>
        <Logo />
        <ol>
            {articles.map((article, indx) => (                
                <li>
                    <Link to={`/articles/${article.article_id}`} key={article.article_id+indx}>{article.title}
                    <div>
                    <img src={article.article_img_url} className='article-image' alt ={article.title}></img>
                        </div>

                    </Link>
                </li>

            ))}
        </ol>
        </>
    );
};

export default Articles;  