import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

function Header() {

    const {loggedInUser} = useContext(UserContext);
    
    return (
        <header>
            <div className="wrapper">
                <Link to="/"> <img id="header-icon" src="/newspaper-svgrepo-com.svg" alt="nc news icon of folded newspaper" /></Link>
                <h1>NC News</h1>
                <Link to="/user-profile"> 
                    <div id="user-icon">
                        <img src={loggedInUser.avatar_url || "pngwing.com.png"} alt="smiling yellow face illustration" />   
                    </div>
                </Link>
            </div>
            <h2 id="welcome-message">Welcome, {loggedInUser.username}!</h2>
        </header>
    )
}

export default Header;
