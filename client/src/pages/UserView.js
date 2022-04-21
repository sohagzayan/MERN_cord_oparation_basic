import React from "react";
import { Table } from "react-bootstrap";
const CORD = () => {
  return (
    <div className="table_wrapper">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>email</th>
            <th>Gender</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Najmul Hossain</td>
            <td>najmul@gmail.com</td>
            <td>Female</td>
            <td>active</td>
            <td>
              <button className="btn btn-danger mx-3">DELETE</button>
              <button className="btn btn-success mx-3">EDIT</button>
            </td>
          </tr>
      
        </tbody>
      </Table>
    </div>
  );
};

export default CORD;
