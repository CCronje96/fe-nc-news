import Comment from "./Comment";
import ErrorComponent from "./ErrorComponent";
import useApiRequest from "../custom-hooks/useApiRequest";
import { getComments } from "../api";
import LoadingAnimation from "./Loading";

function CommentsList({ article_id, commentsVersion, refreshComments }) {
  const {
    data: apiComments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useApiRequest(getComments, article_id, commentsVersion);

  const comments = apiComments || [];

  if (commentsError) {
    return <ErrorComponent component="Comments" error={commentsError} />;
  }

  if (commentsLoading) {
    return (
      <div className="loading-container">
        <h3>Loading Comments</h3>
        <LoadingAnimation className="small-loader" />
      </div>
    );
  }

  return (
    <div className="comments-box">
      {comments.length === 0 ? (
        <div className="no-comments-card">
          <p>No comments yet.</p>
        </div>
      ) : (
        comments.map((comment) => (
          <div className="comment-wrapper" key={comment.comment_id}>
            <Comment comment={comment} refreshComments={refreshComments} />
          </div>
        ))
      )}
    </div>
  );
}

export default CommentsList;
