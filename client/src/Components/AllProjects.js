import {useState} from 'react';
import { Grid } from 'semantic-ui-react';
// import ProjectInfo from './ProjectInfo';
import ProjectElement from './ProjectElement';
import ProjectMaterials from './ProjectMaterials';
import { Routes, Route, Link, Outlet } from 'react-router-dom'; 

function AllProjects ({projects}) {
    const [projMaterials, setProjMaterials] = useState([])

    return (
        <>
            <h1>Projects</h1>
            
            {/* <div className="all-projects">
            <Grid columns={3}> 
                {projects.map(eachProject => {
                    return (
                        <Grid.Column width={3} key={eachProject.id}>
                            <ProjectElement {...eachProject}  setProjMaterials={setProjMaterials}/>
                        </Grid.Column>
                    )}
                )}  
            </Grid>
            </div> */}
            <div className="testing-container">
                {projects.map(eachProject => {
                    return (
                        <div className="testing-card" key={eachProject.id}>
                            <ProjectElement {...eachProject}  setProjMaterials={setProjMaterials}/>
                        </div>
                    )}
                )}
            </div>
            <br></br>
            <br></br>
            {projMaterials.materials ? <ProjectMaterials projMaterials={projMaterials}/> : null}
        </>
    )
}

export default AllProjects;