import { useContext } from "react"
import { UserContext } from "../contexts/User";
import { getUsers } from "../api";
import useApiRequest from "../custom-hooks/useApiRequest";

function UserProfile() {

    const {data: users, isLoading, isError} = useApiRequest(getUsers)
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    if(isLoading) {
        return (<p>Loading...</p>)
    }

    if (isError) {
        return(<p>Oops! Something went wrong.</p>)
    }

    function handleChange(event) {
        const selectedUser = JSON.parse(event.target.value)
        setLoggedInUser(selectedUser)
    }

    return (
        <div id="user-profile-container">
             <div id="user-profile-image-container">
                <img id="profile-icon" src={loggedInUser.avatar_url || "pngwing.com.png"} alt="smiling yellow face illustration" /> 
                </div>  
            <div className="selector-container">
                <p>Switch User:</p>
                <select onChange={handleChange} className="selector" defaultValue="">
                <option value="" disabled>Select user...</option>
                    { users.map((user) => {
                        return (
                        <option key={user.username} value={JSON.stringify(user)}>{user.username}</option>
                    )
                })
                }
                </select>
            </div>
        </div>
    )
}

export default UserProfile