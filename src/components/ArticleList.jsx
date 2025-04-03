import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../custom-hooks/useApiRequest";
import { useSearchParams } from "react-router-dom";

function ArticleList() {

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('topic')

    const {data: articles, isLoading, isError} = useApiRequest(getArticles, query)

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