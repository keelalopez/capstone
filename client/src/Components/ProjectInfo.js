import ProjectInfoElement from './ProjectInfoElement';
import { useParams } from 'react-router-dom';

function ProjectInfo ({projects}) {
    const {projectId} = useParams();
    console.log(projectId)

    // const projArray = projects.map((p) => {
    //     return (
    //         <>
    //             <ProjectInfoElement key={p.id} {...p}/>
    //         </>
    //     )
    // })
    
    return (
        <>
            <h1>Project {projectId}</h1>
            {/* {projArray} */}
        </>
    )
}

export default ProjectInfo;