import { Link, useParams } from "react-router-dom";
import { getArticle } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";
import Votes from "./Votes";
import AddComment from "./AddComment";
import { useState } from "react";
import ErrorComponent from "./ErrorComponent";
import LoadingAnimation from "./Loading";
import CommentsList from "./CommentsList";

function Article() {
  const [commentsVersion, setCommentsVersion] = useState(0);
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useApiRequest(getArticle, article_id);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h3>Loading Article</h3>
        <LoadingAnimation />
      </div>
    );
  }

  if (isError) return <ErrorComponent component="Article" error={isError} />;

  const refreshComments = () => setCommentsVersion((prev) => prev + 1);

  return (
    <div className="article-box-container">
      <div className="article-page-box">
        <div id="text-header">
          <h2 id="article-title">{article.title}</h2>
          <p className="text-author">
            <Link to={`/users/${article.author}`}>
              Author: {article.author}
            </Link>
          </p>
          <p className="text-info">Topic: {article.topic}</p>
          <p className="text-info">
            Published:{" "}
            {new Date(article.created_at).toLocaleDateString("en-GB")}
          </p>
        </div>
        <p className="text-body">{article.body}</p>
        <Votes article={article} />
        <div className="text-footer">
          <AddComment
            article_id={article_id}
            refreshComments={refreshComments}
          />
          <CommentsList
            article_id={article_id}
            commentsVersion={commentsVersion}
            refreshComments={refreshComments}
          />
        </div>
      </div>
    </div>
  );
}

export default Article;
