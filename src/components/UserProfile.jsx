import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/User";
import { getUsers } from "../api";

function UserProfile() {

    const [users, setUsers] = useState([]);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        getUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
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

    function handleClick(event) {
        const selectedUser = JSON.parse(event.target.value)
        setLoggedInUser(selectedUser)
    }

    return (
        <div id="user-profile-container">
             <div id="user-profile-image-container">
                <img id="profile-icon" src={loggedInUser.avatar_url || "pngwing.com.png"} alt="smiling yellow face illustration" />   
            <div className="user-selector">
                <p>Switch User:</p>
                <select onClick={handleClick}>
                    { users.map((user) => {
                        return (
                        <option key={user.username} value={JSON.stringify(user)}>{user.username}</option>
                    )
                })
                }
                </select>
                </div>
            </div>
        </div>
    )
}

export default UserProfile