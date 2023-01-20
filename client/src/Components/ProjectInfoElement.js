
function ProjectInfoElement ({id, name, architect, owner}) {
    return (
        <div className="project-info-card">
            <h2>{name}</h2>
            <p>{id}</p>
            <p>Project details to go here</p>
        </div>
    )
}

export default ProjectInfoElement;