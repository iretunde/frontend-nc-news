import React from "react";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import Loading from "./Loading";


const ViewComment = () => {
    const [comments, showComments] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch(`https://nc-news-0g8q.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => response.json())
        .then((data) => {
            console.log('HI I was here', data.comments)
            showComments(data.comments)
            setIsLoading(false)           
        })

    }, [])

    if (isLoading){
        return (
            <>
            <Loading />
            </>
        )
    }

    return (
        <>
        <CommentCard comments={comments}/>
        </>

    )
}

export default ViewComment;