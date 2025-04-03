import { Link, useParams } from "react-router-dom";
import { getArticle, getComments } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";
import Comment from "./Comment";
import Votes from "./Votes";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

function Article() {

    const [newComments, setNewComments] = useState(false)
    const [isLoadingNewComments, setIsLoadingNewComments] = useState(false);


    const {article_id} = useParams();

    const {data: article, isLoading, isError} = useApiRequest(getArticle, article_id)

    const {data: apiComments, isLoading: commentsLoading, isError: commentsError } = useApiRequest(getComments, article_id, newComments)
    const comments = apiComments || [];


    useEffect(() => {
        if (newComments) {
            setIsLoadingNewComments(true);
        }
    }, [newComments]);

    useEffect(() => {
        if (!commentsLoading) {
            setIsLoadingNewComments(false);
            setNewComments(false);
        }
    }, [commentsLoading]); 

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    return (
        <div className="article-box-container">
            <div className="article-box">
                <div id="text-header">
                    <h3 id="article-title">{article.title}</h3>
                    <p className="text-author"><Link to={`/users/${article.author}`}>Author: {article.author}</Link></p>
                    <p className="text-info">Topic: {article.topic}</p>
                    <p className="text-info">Published: {new Date(article.created_at).toLocaleDateString("en-GB")}</p>
                </div>
                <p className="text-body">{article.body}</p>
                <Votes article={article}/>
                <div className="text-footer">
                <AddComment article_id={article_id} setNewComments={setNewComments}/>
                {isLoadingNewComments && (
                            <div className="loading-new-comments">
                                <p>Loading new comment...</p>
                            </div>
                        )}
                <div className="comments-box">
                        {comments.length === 0 ? (
                            <div className="no-comments-card">
                                <p>No comments yet.</p>
                            </div>
                        ) : (
                            comments.map((comment) => (
                                <div className="comment-wrapper" key={comment.comment_id}>
                                    <Comment comment={comment} setNewComments={setNewComments}/>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Article;
