import './App.css';
import {useEffect, useState} from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupLoginForms from './Components/SigupLoginForms.js';
import LoginForm from './Components/LoginForm.js';
import Projects from './Components/Projects.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])

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
    <p>hellow world</p>
    <p>Hop in, {currentUser}!</p>
    <SignupLoginForms 
      setCurrentUser={setCurrentUser} />
    <LoginForm
      setCurrentUser={setCurrentUser} />
    <Projects />
   </div>
  );
}

export default App;
