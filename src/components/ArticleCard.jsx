import { Link } from "react-router-dom";

function ArticleCard({article}) {
    return (
        <div className="article-box">
            <Link to={`/article/${article.article_id}`}>
            <h2 className="article-title">{article.title}</h2>
            <h3 className="article-info">By: {article.author}</h3>
            <h3 className="article-info">Posted: {new Date(article.created_at).toLocaleDateString("en-GB")}</h3>
            <h3 className="article-info">Votes: {article.votes}</h3>
            <h3 className="article-info">Comments: {article.comment_count}</h3>
            </Link>
        </div>
    )
}

export default ArticleCard;