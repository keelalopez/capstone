import MaterialElement from "./MaterialElement";
import { Container, Table, Button, Icon } from 'semantic-ui-react';

function AllMaterials ({materials}) {
    const materialsArray = materials.map(eachMaterial => {
        return (
            <MaterialElement key={eachMaterial.id} {...eachMaterial}  />
        )
    })

    return (
        <div>
            <h2>All Materials Here</h2>
            <Container>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={4}>Material</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Division</Table.HeaderCell>
                            <Table.HeaderCell width={4}>Project</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {materialsArray}
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Button
                                    floated='right'
                                    icon
                                    labelPosition='left'
                                    primary
                                    size='small'>
                                    <Icon name='plus' /> Add Material
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>

        </div>
    )
}

export default AllMaterials;