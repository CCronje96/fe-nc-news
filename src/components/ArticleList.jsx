import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../custom-hooks/useApiRequest";
import { useNavigate, useSearchParams } from "react-router-dom";

function ArticleList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const topic = searchParams.get('topic');
    const sort_by = searchParams.get('sort_by');
    const order = searchParams.get('order');

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
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Oops! Something went wrong.</p>;
    }

    return (
        <div className="article-box-container">
            <div className="all-selectors-container">
            <div className="selector-container">
            <p>Sort By:</p>
            <select className="selector" 
                value={sort_by || ""}
                onChange={handleSort}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>
            </div>
            <div className="selector-container">
            <p>Order By:</p>
            <select 
                className="selector" 
                value={order || ""}
                onChange={handleOrder}
            >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            </div>
            </div>
            {articles.map((article) => (
                <div key={article.article_id}><ArticleCard article={article} /></div>
            ))}
        </div>
    );
}
export default ArticleList;