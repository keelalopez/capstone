import { Container, Table } from 'semantic-ui-react';
// import ProjectMaterialElement from "./ProjectMaterialElement";
import MaterialElement from './MaterialElement';

function ProjectMaterials ({projMaterials}) {
    // console.log(projMaterials.materials)
    const materialsArray = projMaterials.materials.map(eachMaterial => {
        return (
            <MaterialElement key={eachMaterial.id} {...eachMaterial}  />
        )
    })
// console.log(materialsArray)
//    console.log(projMaterials[0].division.name) THIS WORKS
    // const test = projMaterials.map(m => {
    //     console.log(m)
    // })
    
    return (
        <div>
            <h2>{projMaterials.name} Materials</h2>
            <Container>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Material</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Division</Table.HeaderCell>
                            <Table.HeaderCell>Lead Time</Table.HeaderCell>
                            <Table.HeaderCell>Need By</Table.HeaderCell>
                            <Table.HeaderCell>Project</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {materialsArray}
                </Table>
            </Container>
        </div>
        
    )
}

export default ProjectMaterials;