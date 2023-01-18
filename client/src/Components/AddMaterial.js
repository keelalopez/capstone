import { useState } from 'react';
import { parsePath } from 'react-router-dom';

function AddMaterial ({divisions, projects}) {
    const [newMaterial, setNewMaterial] = useState({
        name: "",
        status: "",
        project_id: "",
        division_id: ""
    })

    // WILL MAP THROUGH PROJECTS FOR THE DROP DOWN
    const projectOptions = projects.map(p => {
        return (
            <option value={p.id} key={p.id}>
                {p.name}
            </option>
        )
    })

    // WILL MAP THROUGH DIVISIONS FOR THE DROP DOWN
    const divisionOptions = divisions.map(d => {
        return (
            <option value={d.id} key={d.id}>
                {d.name}
            </option>
        )
    })

    // UPDATES THE STATE OBJECT TO TRACK USER INPUT
    const handleMaterialChange = (e) => {
        setNewMaterial({
            ...newMaterial,
            [e.target.name]: e.target.value
        })
    }
 
    // MATERIALS#CREATE
    const handleMaterialPost = (e) => {
        e.preventDefault();
        fetch("/materials", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newMaterial)
        })
    }

    return (
        <div id="add-material-container">
            <h2>New Material Form</h2>
            <form onSubmit={handleMaterialPost}>
                <label>Material Name</label>
                <input 
                    label="Material Name"
                    type="name"
                    name="name"
                    value={newMaterial.name}
                    onChange={handleMaterialChange}
                />

                <label>Status</label>
                <input 
                    label="Status"
                    type="status"
                    name="status"
                    value={newMaterial.status}
                    onChange={handleMaterialChange}
                />

                <label>Division</label>
                <select
                    label="Division"
                    type="division"
                    name="division_id" 
                    value={newMaterial.division_id}
                    onChange={handleMaterialChange}>
                    <option value="">Select</option>
                    {divisionOptions}
                </select>

                <label>Project</label>
                <select
                    label="Project"
                    type="project"
                    name="project_id" 
                    value={newMaterial.project_id}
                    onChange={handleMaterialChange}>
                    <option value="">Select</option>
                    {projectOptions}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMaterial;