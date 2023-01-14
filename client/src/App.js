import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import AllProjects from './Components/AllProjects.js';
import AllMaterials from './Components/AllMaterials';
import AllDivisions from './Components/AllDivisions';
import Header from './Components/Header';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])
  const [divisions, setDivisions] = useState([])

  // STAY LOGGED IN
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json().then(data => setCurrentUser(data))
      }
    })
  }, [])

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

  // FETCHING DIVISIONS
  useEffect(() => {
    fetch("/divisions")
    .then(res => res.json())
    .then(setDivisions)
  }, [])


  return (
   <div className="App">
    <Header />
    <p>Hop in, x!</p>
    { currentUser && <button className='ui button' onClick={handleLogOut}>Log Out</button> }
    <Routes>
      <Route path="/" element={<LandingPage 
        setCurrentUser={setCurrentUser} />} />
      <Route path="/projects" element={<AllProjects 
        projects={projects}/>}/>
      <Route path="/materials" element={<AllMaterials 
        materials={materials} />}/>
      <Route path="/divisions" element={<AllDivisions 
        divisions={divisions}/>} />
    </Routes>
   </div>
  );
}

export default App;
