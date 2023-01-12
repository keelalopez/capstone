import './App.css';
import {useEffect, useState} from 'react';
import SignupLoginForms from './Components/SigupLoginForms.js';
import LoginForm from './Components/LoginForm.js';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")
  const [projects, setProjects] = useState([])
  const [materials, setMaterialss] = useState([])

  // TESTING FETCHING PROJECTS
  useEffect(() => {
    fetch("/projects")
    .then(res => res.json())
    .then(setProjects)
  }, [])

  // Testing fetching materials
  useEffect(() => {
    fetch("/materials")
    .then(res => res.json())
    .then(setMaterials)
  }, [])
  console.log(materials)
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
