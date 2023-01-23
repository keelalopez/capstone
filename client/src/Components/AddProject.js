import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject () {
    let navigate = useNavigate();

    // STATE THAT STORES NEW PROJECT INFO
    const [newProj, setNewProj] = useState({
        name: ""
    });

    // UPDATES THE STATE OBJECT TO TRACK USER INPUT
    const handleProjChange = (e) => {
        setNewProj({
            ...newProj,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div id="add-project-container">
            <h1>Add New Project</h1>
            <form>
                <label>Project Name</label>
                <input 
                    // label="Project Name"
                    type="name"
                    name="name"
                    value={newProj.name}
                    onChange={handleProjChange}
                />
                <label>Address</label>
                <input 
                    // label="Project Name"
                    type="address"
                    name="address"
                    value={newProj.address}
                    onChange={handleProjChange}
                />
                <label>Architect</label>
                <input 
                    // label="Project Name"
                    type="architect"
                    name="architect"
                    value={newProj.architect}
                    onChange={handleProjChange}
                />
                <label>Owner</label>
                <input 
                    // label="Project Name"
                    type="owner"
                    name="owner"
                    value={newProj.owner}
                    onChange={handleProjChange}
                />
                <label>Completion Date</label>
                <input 
                    // label="Project Name"
                    type="date"
                    name="completion_date"
                    value={newProj.completion_date}
                    onChange={handleProjChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProject;