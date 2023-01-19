import {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectElement from './ProjectElement';
import ProjectMaterials from './ProjectMaterials';

function AllProjects ({projects}) {
    const [projMaterials, setProjMaterials] = useState([])
 
    return (
        <div className="all-projects">
            <h1>Projects</h1>
            <Grid  relaxed columns={3}> 
                {projects.map(eachProject => {
                    return (
                        <Grid.Column key={eachProject.id}>
                            <ProjectElement {...eachProject}  setProjMaterials={setProjMaterials}/>
                        </Grid.Column>
                    )}
                )}  
            </Grid>
            <br></br>
            <br></br>
            {projMaterials.materials ? <ProjectMaterials projMaterials={projMaterials}/> : null}
        </div>
    )
}

export default AllProjects;