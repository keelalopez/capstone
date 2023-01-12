import SignupLoginForms from './SigupLoginForms.js';
import LoginForm from './LoginForm.js';
import About from './About.js';

function LandingPage () {
    return (
        <div>
            <SignupLoginForms />
            <LoginForm />
            <About />
        </div>
    )
}

export default LandingPage;