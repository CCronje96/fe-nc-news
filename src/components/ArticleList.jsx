import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../custom-hooks/useApiRequest";

function ArticleList() {

    const {data: articles, isLoading, isError} = useApiRequest(getArticles)

    if(isLoading) {
        return (<p>Loading...</p>)
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    return (
        <div className="article-box-container">
        {articles.map((article) => {
            return (
                <div key={article.article_id}><ArticleCard article={article} /></div>
            )
        })}</div>
    )
}

export default ArticleList;