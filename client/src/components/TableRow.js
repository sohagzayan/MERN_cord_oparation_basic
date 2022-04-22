import React from "react";
import { useNavigate } from "react-router-dom";

const TableRow = ({ item }) => {
  const navigate = useNavigate()
  const { name, email, gender, status, _id } = item;

  const handleDeletedUser = async (id) => {
    try {
      fetch("http://localhost:5000/api/user/" + id, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err.message);
    }
  };



  return (
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleDeletedUser(_id)}
          className="btn btn-danger mx-3"
        >
          DELETE
        </button>
        <button onClick={()=> navigate('/updateUser/'+_id)}  className="btn btn-success mx-3">EDIT</button>
      </td>
    </tr>
  );
};

export default TableRow;
