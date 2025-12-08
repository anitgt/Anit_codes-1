import { useState } from "react";


function SignupForm () {
    const [firstName, setFirstName] = useState("timmy");
    const [lastName, setLastName] = useState("timmy");
    const updatefirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }
    const handleSubmit = () => {
        console.log(firstName , lastName)
    }
    return (
        <div>
        <label htmlFor="firstname">Firstname</label>
            <input type="text" 
            placeholder="Username" 
            value={firstName} 
            onChange={updatefirstName}
            id="firstname"
            />

            <label htmlFor="lastname">Lastname</label>
            <input type="text" 
            placeholder="Username" 
            value={lastName} 
            onChange={updateLastName}
            id="lastname"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm