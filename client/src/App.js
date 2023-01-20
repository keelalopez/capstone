import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import AllProjects from './Components/AllProjects.js';
import AllMaterials from './Components/AllMaterials';
import AllDivisions from './Components/AllDivisions';
import Header from './Components/Header';
import AddMaterial from './Components/AddMaterial';
import VerticalNavBar from './Components/VerticalNavBar';
import ProjectInfo from './Components/ProjectInfo';

function App() {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null)
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
        res.json().then(setCurrentUser)
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
        navigate("/")
      }
    })
  }

  // FETCHING PROJECTS ✅
  useEffect(() => {
    fetch("/projects")
    .then(res => res.json())
    .then(setProjects)
  }, [materialTracker])

  // FETCHING MATERIALS ✅
  useEffect(() => {
    fetch("/materials")
    .then(res => res.json())
    .then(setMaterials)
  }, [currentUser, materialTracker, projects])

  // FETCHING DIVISIONS
  useEffect(() => {
    fetch("/divisions")
    .then(res => res.json())
    .then(setDivisions)
  }, [currentUser])

  return (
   <div className="App">
    <Header currentUser={currentUser} handleLogOut={handleLogOut}/>
    <VerticalNavBar />
    
    <Routes>
      <Route path="/" element={<LandingPage 
        setProjects={setProjects}
        setCurrentUser={setCurrentUser} />} />
      <Route path="/projects" element={<AllProjects 
        projects={projects}/>}/>
      <Route path="/projects-info" element={<ProjectInfo 
        projects={projects}/>}/>
      <Route path="/materials" element={<AllMaterials 
        setMaterialTracker={setMaterialTracker}
        materials={materials} />}/>
      <Route path="/add-material" element={<AddMaterial 
        setMaterialTracker={setMaterialTracker}
        projects={projects}
        divisions={divisions}/>} />
      <Route path="/divisions" element={<AllDivisions 
        divisions={divisions}/>} />
    </Routes>
   </div>
  );
}

export default App;
