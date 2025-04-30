import { Link } from "react-router-dom";

function ArticleCard({article}) {
    return (
        <div className="article-card">
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt="article-relevant subject" className="article-card-image"/>
            <h2 className="article-card-title">{article.title}</h2>
            </Link>
            <div className="article-card-description">
            <p className="article-card-author"><Link to={`/users/${article.author}`} className="article-card-author">By: {article.author}</Link></p>
            <p className="article-card-posted">Posted: {new Date(article.created_at).toLocaleDateString("en-GB")}</p>
            <Link to={`/articles/${article.article_id}`} className="bottom-right wrapping-link">
                <div className="info-wrapper">
                    <span className="vote-button material-icons">thumbs_up_down</span>
                    <p className="article-card-comments">{article.votes}</p>
            </div>
            <div className="info-wrapper">
            <span className="comment-button material-icons">comment</span>
            <p className="article-card-comments">{article.comment_count}</p>
            </div>
            </Link>
            </div>            
        </div>
    )
}

export default ArticleCard;
