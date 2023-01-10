import './App.css';
import {useEffect, useState} from 'react';
import SignupLoginForms from './Components/SigupLoginForms.js';
import LoginForm from './Components/LoginForm.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")

  // STAY LOGGED IN
  // useEffect(() => {
  //   fetch("/me")
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => {setCurrentUser(user)})
  //     }
  //   })
  // }, [])

  // HANDLE LOG OUT
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setCurrentUser(null)
      }
    })
  }

  return (
   <div className="App">
    <p>hellow world</p>
    <p>Hop in, {currentUser}!</p>
    { currentUser && <button onClick={handleLogOut}>Log Out</button> }
    <SignupLoginForms 
      setCurrentUser={setCurrentUser} />
    <LoginForm
      setCurrentUser={setCurrentUser} />
   </div>
  );
}

export default App;
