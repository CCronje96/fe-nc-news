import { getTopics } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";
import TopicCard from "./TopicCard";

function TopicsList() {
    const {data: topics, isLoading, isError} = useApiRequest(getTopics);


    if(isLoading) {
        return (<p>Loading...</p>)
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    return (
        <div className="topic-box-container">
        {topics.map((topic) => {
            return (
                <div key={topic.slug}><TopicCard topic={topic} /></div>
            )
        })}</div>
    )
}

export default TopicsList