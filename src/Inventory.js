import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class Inventory extends Component {
  constructor() {
    super();
    this.dataObject = [
      {
        id: 1,
        name: "Chicken",
        quantity: 2,
        unit: "lbs"
      },
      {
        id: 2,
        name: "Brocolli",
        quantity: 1.5,
        unit: "lbs"
      }
    ];
    this.cellEditProp = {
      mode: "dbclick"
    };
    this.options = {
      defaultSortName: "name",
      defaultSortOrder: "asc",
      sortIndicator: true
    };
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <BootstrapTable
          data={this.dataObject}
          cellEdit={this.cellEditProp}
          insertRow={true}
          keyField="id"
          options={this.options}
        >
          <TableHeaderColumn dataField="name" dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="quantity">Quantity</TableHeaderColumn>
          <TableHeaderColumn dataField="unit">Unit</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}