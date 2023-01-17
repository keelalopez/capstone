import MaterialElement from "./MaterialElement";
import { Container, Table } from 'semantic-ui-react';

function AllMaterials ({materials}) {
    const materialsArray = materials.map(eachMaterial => {
        return (
            <MaterialElement {...eachMaterial} key={eachMaterial.id} />
        )
    })

    return (
        <div>
            <h2>All Materials Here</h2>
            <Container>
                <Table>
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

export default AllMaterials;