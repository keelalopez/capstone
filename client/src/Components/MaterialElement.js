import { Table } from "semantic-ui-react";

function MaterialElement ({name, status, division, project}) {
    
    return (
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell  >{status}</Table.Cell>
                    <Table.Cell>0{division.number} {division.name}</Table.Cell>
                    <Table.Cell>{project.name}</Table.Cell>
                    <Table.Cell>
                        <div className="mini ui icon button">
                            <i className="pencil alternate icon" ></i>
                        </div>
                        <div className="mini ui icon button">
                            <i className="trash icon" ></i>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
}

export default MaterialElement;