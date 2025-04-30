import { getTopics } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";
import LoadingAnimation from "./Loading";
import TopicCard from "./TopicCard";

function TopicsList() {
    const {data: topics, isLoading, isError} = useApiRequest(getTopics);


    if(isLoading) {
        return (
              <div className="loading-container">
                <h3>Loading Topics</h3>
                <LoadingAnimation/>
              </div>
            );
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    return (
        <div className="article-box-container">
            <div className="article-card-container">
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} ><TopicCard topic={topic} /></div>
                )
            })}</div>
        </div>
    )
}

export default TopicsList