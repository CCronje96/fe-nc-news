import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../api";
import ErrorComponent from "./ErrorComponent";

function Comment({ comment, refreshComments }) {
    const { loggedInUser: { username } } = useContext(UserContext);
    const [error, setError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    function handleClick() {
        if (username === comment.author) {
            setIsDeleting(true);
            deleteComment(comment.comment_id)
                .then(() => {
                    setSuccessMessage("");
                    setError(false);
                    refreshComments();
                })
                .catch((err) => {
                    setError(err);
                    setSuccessMessage("There was a problem deleting your comment, please try again.");
                });
        }
    }

    if (error) {
        return <ErrorComponent component={"Comment"} error={error} />;
    }

    return (
        <div className="comment-wrapper">
            <div className="comment-body">
                <p className="text-author">
                    <Link to={`/users/${comment.author}`}>{comment.author}</Link>
                </p>
                <p className="text-info">Posted: {new Date(comment.created_at).toLocaleDateString("en-GB")}</p>
                <p className="text-body">{comment.body}</p>
            </div>
            <div className="comment-footer">
                {username === comment.author && (
                    <button onClick={handleClick} disabled={isDeleting} className="delete-comment">
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                )}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
}

export default Comment;
