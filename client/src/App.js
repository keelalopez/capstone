import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
// import SignupLoginForms from './Components/SigupLoginForms.js';
// import LoginForm from './Components/LoginForm.js';
import LandingPage from './Components/LandingPage.js';
import Projects from './Components/Projects.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])

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

  // FETCHING PROJECTS ✅
  useEffect(() => {
    fetch("/projects")
    .then(res => res.json())
    .then(setProjects)
  }, [])

  // FETCHING MATERIALS ✅
  useEffect(() => {
    fetch("/materials")
    .then(res => res.json())
    .then(setMaterials)
  }, [])

  return (
   <div className="App">
    <p>Hop in, {currentUser}!</p>
    { currentUser && <button onClick={handleLogOut}>Log Out</button> }
    <Routes>
      <Route path="/" element={<LandingPage 
        setCurrentUser={setCurrentUser} />} />
      <Route path="/projects" element={<Projects />}/>
    </Routes>
   </div>
  );
}

export default App;
