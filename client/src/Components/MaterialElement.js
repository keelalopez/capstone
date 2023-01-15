import { Table } from "semantic-ui-react";

function MaterialElement ({name}) {

    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{name}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
}

export default MaterialElement;