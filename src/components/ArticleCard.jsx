import { Link } from "react-router-dom";

function ArticleCard({article}) {
    return (
        <div className="article-box">
            <Link to={`/articles/${article.article_id}`}>
            <h2 className="article-card-title">{article.title}</h2>
            </Link>
            <p className="article-card-author"><Link to={`/users/${article.author}`}>By: {article.author}</Link></p>
            <p className="article-card-info">Posted: {new Date(article.created_at).toLocaleDateString("en-GB")}</p>
            <p className="article-card-info">Votes: {article.votes}</p>
            <p className="article-card-info">Comments: {article.comment_count}</p>
            
        </div>
    )
}

export default ArticleCard;