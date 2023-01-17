import { Button, Card, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {useState} from 'react';

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

{/* <Button icon>
    <Icon name="building" />
</Button>
<Button icon>
    <Icon name="dolly flatbed" />
</Button> */}

{/* <Button animated>
    <Button.Content visible>
        <Icon name='dolly' />
    </Button.Content>
    <Button.Content hidden>Materials</Button.Content>
</Button> */}