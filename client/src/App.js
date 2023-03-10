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
import ContainerMaterials from './Components/ContainerMaterials';
import AddProject from './Components/AddProject';
import ContainerProjects from './Components/ContainerProjects';
import UserInfo from './Components/UserInfo';
import Footer from './Components/Footer';

function App() {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [materials, setMaterials] = useState([])
  const [pendingMaterials, setPendingMaterials] = useState([])
  const [deliveredMaterials, setDeliveredMaterials] = useState([])
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
  
  // FETCHING PENDING MATERIALS ✅
  useEffect(() => {
    fetch("/materials/pending")
    .then(res => res.json())
    .then(setPendingMaterials)
  }, [currentUser, materialTracker, projects])
  
  // FETCHING DELIVERED MATERIALS ✅
  useEffect(() => {
    fetch('/materials/delivered')
    .then(res => res.json())
    .then(setDeliveredMaterials)
  }, [currentUser, materialTracker, projects])



  return (
   <div className="App">
    <Header currentUser={currentUser} handleLogOut={handleLogOut}/>
    <VerticalNavBar />
    
    <Routes>
      <Route path="/" element={<LandingPage 
        setProjects={setProjects}
        setCurrentUser={setCurrentUser} />} />
      <Route path="/user" element={<UserInfo 
        currentUser={currentUser}/>} />
      <Route path="/projects" element={<ContainerProjects />}>
          <Route path="all" element={<AllProjects 
            projects={projects}/>} />
          <Route path="add" element={<AddProject setMaterialTracker={setMaterialTracker}/>} />
          <Route path=":projectId" element={<ProjectInfo 
            projects={projects}
            // ADDED 3/7/23
            setMaterialTracker={setMaterialTracker}/>} />
      </Route>
      <Route path="/projects-info" element={<ProjectInfo 
        projects={projects}/>}/>
      <Route path="/materials" element={<ContainerMaterials 
        setMaterialTracker={setMaterialTracker}
        materials={materials} />}>
          <Route path="all" element={<AllMaterials 
          setMaterialTracker={setMaterialTracker}
          materials={materials}/>}>
          </Route>
          <Route path="add" element={<AddMaterial 
          setMaterialTracker={setMaterialTracker}
          projects={projects}
          divisions={divisions}/>}/>
          <Route path="pending" element={<AllMaterials 
          setMaterialTracker={setMaterialTracker}
          materials={pendingMaterials}/>}/>
          <Route path="delivered" element={<AllMaterials 
          setMaterialTracker={setMaterialTracker}
          materials={deliveredMaterials}/>}/>
      </Route>
      <Route path="/divisions" element={<AllDivisions 
        divisions={divisions}/>} />
    </Routes>
    {/* <Footer /> */}
   </div>
  );
}

export default App;
