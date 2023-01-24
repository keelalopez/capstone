import { Container, Table} from 'semantic-ui-react';

function UserInfo ({currentUser}) {
    

    return (
        <div id="user-info-container">
            {currentUser ?
                <Container>
                    <h1>User Account Details</h1>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2}>Attribute</Table.HeaderCell>
                                <Table.HeaderCell width={4}>Detail</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Row>
                            <Table.Cell>Name</Table.Cell>
                            <Table.Cell>{currentUser.name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Company</Table.Cell>
                            <Table.Cell>{currentUser.company ? currentUser.company : "Need to Update"}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Position</Table.Cell>
                            <Table.Cell>{currentUser.position ? currentUser.position : "Need to Update"}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Total Projects</Table.Cell>
                            <Table.Cell>{currentUser.projects_count}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Total Materials</Table.Cell>
                            <Table.Cell>{currentUser.materials_count}</Table.Cell>
                        </Table.Row>
                       
                    </Table>
                </Container>
            :
                null
            }
        </div>
    )
}

export default UserInfo;