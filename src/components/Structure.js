import React from "react";

import { Table } from "semantic-ui-react";
// going to need to loop the data here
export default function Structure(props) {
  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>New Confirmed</Table.HeaderCell>
          <Table.HeaderCell>Total Confirmed</Table.HeaderCell>
          <Table.HeaderCell>New Death</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{props.Nconfirmed}</Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell textAlign="right">None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell textAlign="right">Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell textAlign="right">None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
