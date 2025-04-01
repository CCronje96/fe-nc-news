import { Link } from "react-router-dom";

function Nav() {
    return (
        <div id="nav-bar">
            <div className="nav-button">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-button">
                <Link to="/topics">Topics</Link>
            </div>
        </div>
    )
}

export default Nav;