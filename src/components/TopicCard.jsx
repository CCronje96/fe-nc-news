import { Link } from "react-router-dom";

function TopicCard({topic}) {

    function capitalizeFirstLetterOfEachWord(topicSlug) {
        if (typeof topicSlug !== 'string') {
          return ''; 
        }
      
        return topicSlug
          .split(' ')
          .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
          )
          .join(' ');
      }
      
      const newTopicSlug = capitalizeFirstLetterOfEachWord(topic.slug);

    return (
            <div className="topic-box"> 
                <Link to={`/articles?topic=${topic.slug}`} className="wrapping-link">
                    <div className="topic-text-container">
                        <h2 className="topic-card-title">{newTopicSlug}</h2>
                        <p className="topic-card-description">{topic.description}</p>
                    </div>
                    <div className="topic-img-container">
                        <img src={topic.img_url || "/24075671_sl_070720_32260_31.jpg" } alt="topic related subject"/> 
                    </div>
                 </Link>
            </div>
    )
}

export default TopicCard;