import { Button, Card } from 'semantic-ui-react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Routes, Route, Outlet } from 'react-router-dom'; 
// import {useState} from 'react';

function ProjectElement ({ id, name, setProjMaterials}) {
    let navigate = useNavigate();

    // PROJECTS#SHOW, USE CUSTOM ROUTE
    const handleProjMaterials = () => {
        fetch(`/projects/${id}`)
        .then(res => res.json())
        .then(data => {
            setProjMaterials(data)
            // console.log(data.materials)
        })
    }

    // WILL SHOW PROJECTS INFORMATION
    const handleProjectShow = () => {
        navigate(`/projects/${id}`)
    }

    return (
        <div className="project">
            <Card 
                style={{
                    width: "250px"  
                }}
            >
                <Card.Content header={name} />
                <Card.Content extra>
                        <Button onClick={handleProjectShow}>Project</Button>
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
