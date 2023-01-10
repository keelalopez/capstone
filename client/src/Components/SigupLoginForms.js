import {useState} from 'react';

function SignupLoginForms({setCurrentUser}) {
    // STATE FOR HARNESSING NEW USER INFO FROM FORM
    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        password: "", 
        password_confirmation: ""
    })

    // CHANGE FUNCTION FOR FORM
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setNewUser({
            ...newUser,
            [key]: value
        })
    }

    // POST NEW USER
    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Submitted!')
        fetch("/signup", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(res => {
            if(res.ok){
                res.json().then(console.log("posted!"))
            } else {
                res.json().then(console.log("failed!"))
            }
        })
    }

    return (
        <div id="signup-container">
            <p>Hellow form signuploginforms</p>
            <div id="signup-form">
                <form  onSubmit={handleSignup}>
                    Username: <input 
                        type="username"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}/>
                    Name: <input 
                        type="name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}/>
                    Password: <input
                        type="password"
                        name="password"
                        value={newUser.password} 
                        onChange={handleChange}/>
                    Confirm Password: <input 
                        type="password"
                        name="password_confirmation"
                        value={newUser.password_confirmation}
                        onChange={handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default SignupLoginForms;