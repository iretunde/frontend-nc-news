import React, { useState, useEffect } from "react";
import Logo from './Logo';
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const Articles = () => {  
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Extract search params
    const [searchParams] = useSearchParams();
    const particular_topic = searchParams.get('topic'); 
    console.log(`Extracted topic: ${particular_topic}`); 
    const topic = particular_topic ? `topic=${particular_topic}` : ''

    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles?${topic}`)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                setIsLoading(false);
            });
    }, []); 

    if (isLoading) {
        return (
            <>
                <h1 style={{ textDecoration: 'underline' }}>Articles List</h1>
                <Logo />
                <Loading />
            </>
        );
    }

    return (
        <>
            <h1 style={{ textDecoration: 'underline' }}>Articles List</h1>
            <Logo />
            <ol>
                {articles.map((article, indx) => (                
                    <li key={article.article_id + indx}>
                        <Link to={`/articles/${article.article_id}`}>{article.title}
                            <div>
                                <img src={article.article_img_url} className='article-image' alt={article.title}></img>
                            </div>
                        </Link>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Articles;
