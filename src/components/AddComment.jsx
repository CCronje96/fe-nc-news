import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../api";

function AddComment({article_id, setNewComments}) {

    const [commentInput, setCommentInput] = useState("Type here...");
    const {loggedInUser: {username}} = useContext(UserContext);
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");


    function handleClick() {
        if(commentInput === "Type here..." || commentInput === "Please enter a comment..." ){
            setCommentInput("")
            setError(false);
        }
    }

    function handleChange(event) {
        setCommentInput(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        if (commentInput === "" || commentInput === "Type here...") {
            setCommentInput("Please enter a comment...")
            setError(true);
            return;
        };

        setIsSubmitting(true);
        setError(false);
        setSuccessMessage("");

        postComment(article_id, commentInput, username)
            .then(() => {
                setNewComments(true);
                setSuccessMessage("Your comment was posted successfully!");
                setCommentInput("Type here...");
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <div className="add-comment-container">
            <form className="add-comment-form" onSubmit={handleSubmit}>
                <label>Add Comment<textarea 
                className={`comment-input ${error ? 'error' : ''}`}
                onClick={handleClick} 
                onChange={handleChange} 
                value={commentInput}
                ></textarea></label>
                {successMessage && <p className="success-message">{successMessage}</p>}

                <button className="comment-submit" disabled={isSubmitting}>{isSubmitting ? "Posting..." : "Post"}</button>
            </form>
        </div>
    )

}

export default AddComment;