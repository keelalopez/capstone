import ProjectInfoElement from './ProjectInfoElement';

function ProjectInfo ({projects}) {
    const projArray = projects.map((p) => {
        return (
            <>
                <ProjectInfoElement key={p.id} {...p}/>
            </>
        )
    })
    
    return (
        <>
            {projArray}
        </>
    )
}

export default ProjectInfo;