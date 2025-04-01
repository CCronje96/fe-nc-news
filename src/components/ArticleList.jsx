import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        getArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
        })
        .catch((err) => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

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