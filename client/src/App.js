import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import AllProjects from './Components/AllProjects.js';
import AllMaterials from './Components/AllMaterials';
import AllDivisions from './Components/AllDivisions';
import Header from './Components/Header';
import AddMaterial from './Components/AddMaterial';

function App() {
  const [currentUser, setCurrentUser] = useState("keila")
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])
  const [divisions, setDivisions] = useState([])
  
  // USED TO RENDER AUTOMATICALLY MATERIAL CRUD
  const [materialTracker, setMaterialTracker] = useState([])

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
  }, [materialTracker])

  // FETCHING DIVISIONS
  useEffect(() => {
    fetch("/divisions")
    .then(res => res.json())
    .then(setDivisions)
  }, [])


  return (
   <div className="App">
    <Header currentUser={currentUser} handleLogOut={handleLogOut}/>
    
    <Routes>
      <Route path="/" element={<LandingPage 
        setCurrentUser={setCurrentUser} />} />
      <Route path="/projects" element={<AllProjects 
        projects={projects}/>}/>
      <Route path="/materials" element={<AllMaterials 
        setMaterialTracker={setMaterialTracker}
        materials={materials} />}/>
      <Route path="/divisions" element={<AllDivisions 
        divisions={divisions}/>} />
      <Route path="/add-material" element={<AddMaterial 
        setMaterialTracker={setMaterialTracker}
        projects={projects}
        divisions={divisions}/>} />
    </Routes>
   </div>
  );
}

export default App;
