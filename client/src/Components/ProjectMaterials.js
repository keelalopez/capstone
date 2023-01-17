import { Container, Table } from 'semantic-ui-react';
import MaterialElement from "./MaterialElement";

function ProjectMaterials ({projMaterials}) {
    // console.log(projMaterials.materials)
    const materialsArray = projMaterials.materials.map(eachMaterial => {
        return (
            <MaterialElement key={eachMaterial.id} {...eachMaterial}  />
        )
    })

    return (
        <div>
            <h2>All Materials Related to Project Clicked are Here</h2>
            <Container>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Material</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Division</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {materialsArray}
                </Table>
            </Container>
        </div>
        
    )
}

export default ProjectMaterials;