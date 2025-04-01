import { Link, useParams } from "react-router-dom";
import { getArticle } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";

function Article() {

    const {article_id} = useParams();

    const {data: article, isLoading, isError} = useApiRequest(getArticle, article_id)

    if(isLoading) {
        return (<p>Loading...</p>)
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    return (
        <div className="article-box-container">
            <div className="article-box">
                <div id="article-header">
                    <h3 id="article-title">{article.title}</h3>
                    <p className="article-header-author"><Link to={`/users/${article.author}`}>Author: {article.author}</Link></p>
                    <p className="article-header-info">Topic: {article.topic}</p>
                    <p className="article-header-info">Published: {new Date(article.created_at).toLocaleDateString("en-GB")}</p>
                </div>
                <p className="article-body">{article.body}</p>
                <div className="article-footer">
                </div>
            </div>
        </div>
    )

}

export default Article;
