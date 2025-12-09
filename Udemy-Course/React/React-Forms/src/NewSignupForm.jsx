import { useState } from "react";


function NewSignupForm () {
    const [formData, setFormData] = useState({firstName: '', lastName: '', password: ''})

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            currData[changedField] = newValue;
            return {...currData}
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }
    return (
        <div>
        <label htmlFor="firstname">Firstname</label>
            <input type="text" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange}
            id="firstname"
            name="firstName"
            />

            <label htmlFor="lastname">Lastname</label>
            <input type="text" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange}
            id="lastname"
            name="lastName"
            />
            <label htmlFor="password">password</label>
            <input type="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange}
            id="password"
            name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default NewSignupForm