import { useState } from "react";


function UsernameForm () {
    const [username, setUsername] = useState("timmy");
    const updateUsername = (evt) => {
        console.log(evt.target.value);
        setUsername(evt.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={updateUsername}/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;