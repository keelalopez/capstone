import './App.css';
import {useState} from 'react';
import SignupLoginForms from './Components/SigupLoginForms.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila prayers")

  return (
   <div className="App">
    <p>hellow world</p>
    <p>Hop in, {currentUser}!</p>
    <SignupLoginForms 
      setCurrentUser={setCurrentUser} />
   </div>
  );
}

export default App;
