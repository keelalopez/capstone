import {useState} from 'react';
import ProjectElement from './ProjectElement';
import { Grid } from 'semantic-ui-react';

function AllProjects ({projects}) {
    // console.log("from projects component", projects)

    const projectsArray = projects.map(eachProject => {
        return (<ProjectElement {...eachProject} key={eachProject.id} />)
    })

    return (
        <div className="all-projects">
            <h1>Projects</h1>
            <Grid  relaxed columns={3}> 
                {projects.map(eachProject => (
                    <Grid.Column>
                        <ProjectElement {...eachProject} key={eachProject.id} />
                    </Grid.Column>
                ))}  
            </Grid>
        </div>
    )
}

export default AllProjects;