import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import {useState} from 'react';

function ProjectElement ({ id, name, setProjMaterials}) {
    // PROJECTS#SHOW, USE CUSTOM ROUTE
    const handleProjMaterials = () => {
        fetch(`/projects/${id}`)
        .then(res => res.json())
        .then(setProjMaterials)
    }

    // console.log(projMaterials.materials)
    return (
        <div className="project">
            <Card>
                <Card.Content header={name} />
                <Card.Content extra>
                    <Link to="/project">
                        <Button>Project</Button>
                    </Link>
                    {/* <Link to="/materials"> 
                        <Button>Materials</Button>
                    </Link> */}
                    <Button onClick={handleProjMaterials}>Materials</Button>
                </Card.Content>
            </Card>
         </div>
    )
}

export default ProjectElement;
