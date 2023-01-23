import {useState} from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';


function LoginForm ({setCurrentUser, setProjects}) {
    let navigate = useNavigate(); 

    const [user, setUser] = useState({
        username: "",
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
                res.json().then(data => {
                    // console.log(data)
                    setCurrentUser(data)
                    setProjects(data.projects)
                    navigate("/projects")
                })
            } else {
                res.json().then(console.log("try again buddy!"))
            }
        })
        
    }

    return (
        <div id="login-container">
            <Container id="login-container">
                <h2 className="ui header">Log in</h2>
                <Form size={'tiny'} onSubmit={handleSubmit}>
                    <Form.Field
                        control={Input}
                        placeholder="Username"
                        name="username"
                        width={7}
                        value={user.username}
                        onChange={handleChange}
                        />
                    <Form.Field
                        control={Input}
                        placeholder="Password"
                        type="password"
                        name="password"
                        width={7}
                        value={user.password}
                        onChange={handleChange}
                        />
                    {/* <Link to="/projects"> */}
                        <Button type="submit" size='tiny'>Submit</Button>
                    {/* </Link> */}
                </Form>
            </Container>
        </div>
    )
}

export default LoginForm;
