import { useParams } from 'react-router-dom';
import { Container, Table, Button} from 'semantic-ui-react';

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

    const handleDelete = () => {
        console.log('testing deleting project')
        fetch(`/projects/${projectId}`, {
            method: 'DELETE',
        })
    }

    const projectDisplayed = projects.filter (p => {
        if (p.id === parseInt(projectId)) {
            return p
        }
    })
    const projObj = projectDisplayed[0]

    return (
        <div id="project-info-container">
            {projObj ? 
                <Container>
                    <h1>{projObj.name} Details</h1>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2}>Attribute</Table.HeaderCell>
                                <Table.HeaderCell width={4}>Detail</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Row>
                            <Table.Cell>Name: </Table.Cell>
                            <Table.Cell>{projObj.name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Address:</Table.Cell>
                            <Table.Cell>{projObj.address}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Owner:</Table.Cell>
                            <Table.Cell>{projObj.owner}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Completion Date:</Table.Cell>
                            <Table.Cell>{projObj.completion_date}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Total Materials:</Table.Cell>
                            <Table.Cell>{projObj.materials_count}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pending Materials:</Table.Cell>
                            <Table.Cell>{projObj.pending_count}</Table.Cell>
                        </Table.Row>
                    </Table>
                    <Button>Edit Project Info</Button>
                    <Button onClick={handleDelete}>Delete Project</Button>
                </Container>
            : null
            }
        </div>
    )
}

export default ProjectInfo;