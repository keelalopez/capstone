import './App.css';
import {useState} from 'react';
import SignupLoginForms from './Components/SigupLoginForms.js';
import LoginForm from './Components/LoginForm.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")

  return (
   <div className="App">
    <p>hellow world</p>
    <p>Hop in, {currentUser}!</p>
    <SignupLoginForms 
      setCurrentUser={setCurrentUser} />
    <LoginForm
      setCurrentUser={setCurrentUser} />
   </div>
  );
}

export default App;
