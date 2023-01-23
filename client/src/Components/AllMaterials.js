import { Container, Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MaterialElement from "./MaterialElement";

function AllMaterials ({materials, setMaterialTracker, projects, divisions}) {
    // WILL MAP THROUGH LIST OF ALL MATERIALS AND RENDER IN TABLE
    const materialsArray = materials.map(eachMaterial => {
        return (
            <MaterialElement key={eachMaterial.id} {...eachMaterial} setMaterialTracker={setMaterialTracker} />
        )
    })

    // MATERIALS#CREATE
    // const handleNewMaterialRedirect = () => {
    //     return (
    //         <div>
    //             <AddMaterial />
    //         </div>
    //     )
    // }

    return (
        <div className="materials-container">
            <h2>All Materials Here</h2>
            <Container>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={4}>Material</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Division</Table.HeaderCell>
                            <Table.HeaderCell>Lead Time</Table.HeaderCell>
                            <Table.HeaderCell>Need By</Table.HeaderCell>
                            <Table.HeaderCell width={4}>Project</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {materialsArray}
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Link to="/add">
                                    <Button
                                        // onClick={handleNewMaterialRedirect}
                                        floated='right'
                                        icon
                                        labelPosition='left'
                                        primary
                                        size='small'>
                                        <Icon name='plus' /> Add Material
                                    </Button>
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>

        </div>
    )
}

export default AllMaterials;