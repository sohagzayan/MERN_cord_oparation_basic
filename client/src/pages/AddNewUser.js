import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const AddNewUser = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [gender , setGender] = useState('gender')
  const [status , setStatus] = useState('status')

  const handleAddUser = async(e)=>{
    e.preventDefault()

    const userData = {
        name ,
        email,
        gender,
        status
    }

    await fetch('http://localhost:5000/api/user',{
      method : "POST",
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(userData)
    })
    .then(()=> console.log('adding successfull'))
    .catch((err)=>{
      console.log(err.message);
    })  
  }

  return (
    <div className="addNewUser">
      <h2 className="text-center mb-4">ADD NEW USER </h2>
      <Form onSubmit={handleAddUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  onChange={(e)=> setEmail(e.target.value)} value={email}  type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <label className="me-3" >Choose Gender</label>
        <select value={gender}  onChange={(e)=> setGender(e.target.value)}   className="me-3" name="" id="">
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label className="me-3" >Status</label>
        <select value={status} onChange={(e)=> setStatus(e.target.value)} className="" name="" id="">
            <option value="active">status</option>
            <option value="active">Active</option>
            <option value="unActive">UnActive</option>
        </select>
    
        <Button style={{width : '100%'}} className="d-block mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNewUser;
