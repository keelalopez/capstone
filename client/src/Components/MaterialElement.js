import { Table } from "semantic-ui-react";

function MaterialElement ({name, status, division}) {
    
    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell  >{status}</Table.Cell>
                    <Table.Cell>0{division.number} {division.name}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
}

export default MaterialElement;