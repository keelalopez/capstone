import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMaterial ({divisions, projects, setMaterialTracker}) {
    let navigate = useNavigate();

    // STATE OBJECT STORES NEW MATERIAL INFORMATION
    const [newMaterial, setNewMaterial] = useState({
        name: "",
        status: "",
        lead_time: 0,
        need_by_date: "",
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
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setMaterialTracker(data)
                    navigate("/materials/all")
                })
            }
        })
    }

    return (
        <div id="add-container">
            <h2>New Material Form</h2>
            <form onSubmit={handleMaterialPost}>
                <label>Material Name</label>
                <input 
                    required
                    label="Material Name"
                    type="name"
                    name="name"
                    value={newMaterial.name}
                    onChange={handleMaterialChange}
                />

                <label>Status</label>
                <input 
                    required
                    label="Status"
                    type="status"
                    name="status"
                    value={newMaterial.status}
                    onChange={handleMaterialChange}
                />

                <label>Lead Time</label>
                <input 
                    required
                    label="lead_time"
                    type="integer"
                    name="lead_time"
                    value={newMaterial.lead_time}
                    onChange={handleMaterialChange}
                />
                <p>*Add number of weeks</p>

                <label>Need Delivered By</label>
                <input 
                    required
                    type="date"
                    name="need_by_date"
                    value={newMaterial.need_by_date}
                    onChange={handleMaterialChange}
                />

                <label>Division</label>
                <select
                    required
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
                    required
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