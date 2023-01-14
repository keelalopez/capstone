import SignupLoginForms from './SigupLoginForms.js';
import LoginForm from './LoginForm.js';
import About from './About.js';
import { Grid } from 'semantic-ui-react'

function LandingPage () {
    return (
        <div>
            <Grid  divided>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <div className="sign-in-form">
                            <SignupLoginForms />
                        </div>
                        <div className="sign-in-form">
                            <LoginForm />
                        </div>
                    </Grid.Column>
                    
                    <Grid.Column width={8}>
                        <div className="about">
                            <About />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default LandingPage;