import { Link } from "react-router-dom";

function Comment({comment}) {
    return(
        <div>
            <div id="text-header">
                <h3 id="comment-title">{comment.title}</h3>
                <p className="text-author"><Link to={`/users/${comment.author}`}>{comment.author}</Link></p>
                <p className="text-info">Published: {new Date(comment.created_at).toLocaleDateString("en-GB")}</p>
                <p className="text-body">{comment.body}</p>
            </div>
        </div>
    )

}

export default Comment;