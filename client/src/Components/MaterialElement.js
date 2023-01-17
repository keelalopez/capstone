import { Form, Input, Button } from 'semantic-ui-react';
import { Table } from "semantic-ui-react";
import { useState } from 'react';

function MaterialElement ({id, name, status, division, project, setMaterialTracker}) {
    const [displayForms, setDisplayForms] = useState(false);
    const [updatedMaterial, setUpdatedMaterial] = useState({
        status: "",
    })

    // HANDLE CHANGE FOR EDIT
    const handleChange = (e) => {
        setUpdatedMaterial({
            ...updatedMaterial, 
            [e.target.name]: e.target.value
        })
    }

    // CANCEL BUTTON WHEN USER CHANGES THEIR MIND. GOES BACK TO ORIGINAL VALUE
    const handleCancelEdit = () => {
        setUpdatedMaterial({
            status: status
        })  
    }

    // MATERIAL PATCH 
    const handleEdit = (e) => {
        e.preventDefault();
        setDisplayForms(!displayForms);
        fetch(`/materials/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedMaterial)
        })
        .then(res => {
            if (res.ok){
                res.json()
                .then(setMaterialTracker)
            } else {
                res.json().then(console.log("beep beep problem beep"))
            }
        })
    }
    
    return (
        <>
        { !displayForms ? 
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell  >{status}</Table.Cell>
                    <Table.Cell>0{division.number} {division.name}</Table.Cell>
                    <Table.Cell>{project.name}</Table.Cell>
                    <Table.Cell>
                        <div className="mini ui icon button">
                            <i className="pencil alternate icon" onClick={handleEdit}></i>
                        </div>
                        <div className="mini ui icon button">
                            <i className="trash icon" ></i>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        :
        <Table.Body>
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell  >
                    <Form onSubmit={handleEdit}>
                        <Form.Field 
                            control={Input}
                            placeholder="New Status"
                            name="status"
                            value={updatedMaterial.status}
                            onChange={handleChange}
                        />
                        <Button type="submit" size='tiny'>Submit</Button>
                        <Button type="submit" size='tiny' onClick={handleCancelEdit}>Cancel</Button>
                    </Form>
                </Table.Cell>
                <Table.Cell>0{division.number} {division.name}</Table.Cell>
                <Table.Cell>{project.name}</Table.Cell>
                <Table.Cell></Table.Cell>
            </Table.Row>
        </Table.Body>
        }
        </>
    )
}

export default MaterialElement;