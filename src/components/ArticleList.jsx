import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../custom-hooks/useApiRequest";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { useEffect, useState } from "react";
import LoadingAnimation from "./Loading";

function ArticleList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [paramsError, setParamsError] = useState(null)

    const {topic, sort_by, order} = Object.fromEntries(searchParams.entries());

    useEffect(() => {
        const paramsObject = Object.fromEntries(searchParams.entries());
        const validParams = ['topic', 'sort_by', 'order'];
        const invalidParams = Object.keys(paramsObject).filter(
            key => !validParams.includes(key)
        );

        if (invalidParams.length > 0) {
            setParamsError(`Invalid Query Parameters: ${invalidParams.join(', ')}`);
        } else {
            setParamsError(null);
        }
    }, [searchParams]);

    const { data: articles, isLoading, isError } = useApiRequest(getArticles, topic, sort_by, order);

    function handleSort(event) {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('sort_by', event.target.value);

        if (!window.location.pathname.startsWith('/articles')) {
            navigate({
                pathname: '/articles',
                search: newSearchParams.toString()
            });
        } else {
            setSearchParams(newSearchParams);
        }
    }

    function handleOrder(event) {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('order', event.target.value);

        if (!window.location.pathname.startsWith('/articles')) {
            navigate({
                pathname: '/articles',
                search: newSearchParams.toString()
            });
        } else {
            setSearchParams(newSearchParams);
        }
    }

    if (isLoading) {
            return <LoadingAnimation />
        }

    if (isError) {
        return <ErrorComponent component={"Articles"} error={isError} />;
    }
    if (paramsError) {
        return <ErrorComponent component={"Articles"} error={paramsError} />;
    }


    return (
        <div className="article-box-container">
            <div className="all-selectors-container">
            <div className="selector-container">
            <select className="selector" 
                onChange={handleSort} defaultValue="">
                <option value="" disabled>Sort By...</option>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>
            </div>
            <div className="selector-container">
            <select 
                className="selector" 
                onChange={handleOrder}
                defaultValue="">
                <option value="" disabled>Order...</option>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            </div>
            </div>
            <div className="article-card-container">
            {articles.map((article) => (
                <div key={article.article_id}><ArticleCard article={article} /></div>
            ))}
            </div>
        </div>
    );
}
export default ArticleList;