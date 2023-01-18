import {useState} from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';

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
            <h2 className="ui header">Sign up</h2>
            <Container id="signup-container">
                <Form size={'tiny'} onSubmit={handleSignup}>
                    <Form.Field
                        width={7}
                        control={Input} 
                        placeholder="Username"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}/>
                    <Form.Field 
                        width={7}
                        control={Input} 
                        placeholder="Name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}/>
                    <Form.Field
                        width={7}
                        control={Input} 
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={newUser.password} 
                        onChange={handleChange}/>
                    <Form.Field 
                        width={7}
                        control={Input} 
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        type="password"
                        value={newUser.password_confirmation}
                        onChange={handleChange}/>
                    <Button type="submit" size='tiny'>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default SignupLoginForms;