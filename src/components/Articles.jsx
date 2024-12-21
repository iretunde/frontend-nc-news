import React, { useState, useEffect } from "react";
import Logo from './Logo';
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const Articles = () => {  
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortquery, setSortQuery] = useState('none');  // Default to "No Sorting"

    // Extract search params
    const [searchParams] = useSearchParams();
    const particular_topic = searchParams.get('topic'); 
    const topic = particular_topic ? `topic=${particular_topic}` : '';
    const query = sortquery !== 'none' ? `&sort_by=${sortquery}` : '';

    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles?${topic}${query}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.articles)
                setArticles(data.articles);
                setIsLoading(false);
            });
    }, [sortquery]); 

    const handleSortChange = (event) => {
        setSortQuery(event.target.value);  // Update the sort query state
    };

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

            {/* Dropdown for sorting */}
            <div className="dropdown">
                <select value={sortquery} onChange={handleSortChange}>
                    <option value="none">No Sorting</option>
                    <option value="created_at">Sort by Date</option>
                    <option value="votes">Sort by Votes</option>
                </select>
            </div>

            <ol>
                {articles.map((article, indx) => (                
                    <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            {article.title}
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
