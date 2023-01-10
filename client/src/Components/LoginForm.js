import {useState} from 'react';

function LoginForm ({setCurrentUser}) {

    const [user, setUser] = useState({
        username: "testing",
        password: ""
    })

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setUser ({
            ...user, 
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(console.log("working!"))
            } else {
                res.json().then(console.log("try again buddy!"))
            }
        })
        
    }

    return (
        <div id="login-container">
            <p>Hellow from log in form component</p>
            <div id="login-form">
                <form onSubmit={handleSubmit}>
                    Username: <input
                        type="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        />
                    password: <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
