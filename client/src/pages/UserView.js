import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";



const CORD = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/api/user')
    .then(res => res.json())
    .then(data => setData(data))
  },[data])



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
         {data.map(item => <TableRow key={item._id} item={item} /> )}
        </tbody>
      </Table>
    </div>
  );
};

export default CORD;
