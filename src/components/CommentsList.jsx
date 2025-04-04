import { useEffect, useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import ErrorComponent from "./ErrorComponent";

function CommentsList({ article_id, newComments, setNewComments, comments, commentsLoading, commentsError }) {

    const [isLoadingNewComments, setIsLoadingNewComments] = useState(false);

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

    if (commentsError) {
        return <ErrorComponent component="Comments" error={commentsError} />;
    }

    if (commentsLoading) {
        return <p>Loading comments...</p>;
    }

    return (
        <div className="comments-box">
            {isLoadingNewComments && (
                            <div className="loading-new-comments">
                                <p>Loading new comment...</p>
                            </div>
                        )}
            <AddComment article_id={article_id} setNewComments={setNewComments} />
            {comments.length === 0 ? (
                <div className="no-comments-card">
                    <p>No comments yet.</p>
                </div>
            ) : (
                comments.map((comment) => (
                    <div className="comment-wrapper" key={comment.comment_id}>
                        <Comment comment={comment} setNewComments={setNewComments} />
                    </div>
                ))
            )}
        </div>
    );
}

export default CommentsList;