import {useState} from 'react';
import ProjectElement from './ProjectElement';

function AllProjects ({projects}) {
    // console.log("from projects component", projects)

    const projectsArray = projects.map(eachProject => {
        return (<ProjectElement {...eachProject} key={eachProject.id} />)
    })

    return (
        <div>
            <p>Hellow from Projects component</p>
            {projectsArray}
        </div>
    )
}

export default AllProjects;