import { useEffect, useState } from "react";
import { patchArticle } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";

function Votes({article}) {

    const [displayedVotes, setDisplayedVotes] = useState(article.votes);
    const [clickedVote, setClickedVote] = useState(null);
    const [voteChange, setVoteChange] = useState(0);

    function handleClick (changeAmount) {
        if (clickedVote === null || clickedVote !== changeAmount) {
            setClickedVote(changeAmount);
            setVoteChange(changeAmount);
            setDisplayedVotes(displayedVotes + changeAmount);
        } else {
            setClickedVote(null);
            setVoteChange(0);
            setDisplayedVotes(displayedVotes - changeAmount);
        }
    }

    const {data, isError} = useApiRequest(patchArticle, article.article_id, voteChange)

    useEffect(() => {
        if (data && data.votes !== displayedVotes) {
          setDisplayedVotes(data.votes);
        }
      }, [data, displayedVotes]);

    if (isError) {
        return(<p className="comment-error">Oops! Something went wrong.</p>)
    }
    
    return(
        <div className="votes-wrapper">
            <div className={`vote ${clickedVote === 1 ? 'vote-selected' : ''}`}>
                <span className="vote-button material-icons" onClick={()=>{handleClick(1)}}>thumb_up</span>
            </div>
            <div className={`vote ${clickedVote === -1 ? 'vote-selected' : ''}`}>
                <span className="vote-button material-icons" onClick={()=>{handleClick(-1)}}>thumb_down</span>
            </div>
                <span className="vote-count">{displayedVotes}</span>
        </div>
    )
}

export default Votes;