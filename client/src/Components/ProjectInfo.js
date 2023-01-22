import { useParams } from 'react-router-dom';

function ProjectInfo ({projects}) {
    const {projectId} = useParams();

    // USES PROJECT INFO ELEMENT. CONSIDER DELETING
    // const projArray = projects.map((p) => {
    //     return (
    //         <>
    //             <ProjectInfoElement key={p.id} {...p}/>
    //         </>
    //     )
    // })

    const projectDisplayed = projects.filter (p => {
        if (p.id === parseInt(projectId)) {
            return p
        }
    })
    const projObj = projectDisplayed[0]

    return (
        <>
            {projObj ? 
                <div>
                    <h1>{projObj.name}</h1>
                    <h4>Address: {projObj.address}</h4>
                    <h4>Owner: {projObj.owner}</h4>
                    <h4>Completion Date: {projObj.completion_date}</h4>
                    <h4>Total Materials: {projObj.materials_count}</h4>
                    <h4>Pending Materials: {projObj.pending_count}</h4>
                </div>
            : null
            }
        </>
    )
}

export default ProjectInfo;