import React from "react";
import Logo from './Logo';
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Topics = () => {  
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://nc-news-0g8q.onrender.com/api/topics').then((response) => response.json()).then((body) => {
            const new_body = body.topics.map((obj) => obj.slug)
            setTopics(new_body)
            setIsLoading(false)
            console.log(new_body)
        }
        )
    },[]) 


    if (isLoading){
        return (
            <>
            <h1 style={{ textDecoration: 'underline' }}>Topics</h1>
            <Logo />
            <Loading />
            </>
        )
    }


    return (
        <>
        <Logo />
        <h1 style={{ textDecoration: 'underline' }}>Topics</h1>
        <ol>
            {topics.map((topic, indx) => (                
                    <li>
                        <Link to={`/articles?topic=${topic}`} key={indx}>{topic}

                        </Link>
                    </li>

                ))}
        </ol>

        </>
    );
};

export default Topics;  