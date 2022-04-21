import React from "react";
import { Button, Form } from "react-bootstrap";
const AddNewUser = () => {
  return (
    <div className="addNewUser">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <label className="me-3" For="card">Choose Gender</label>
        <select  className="me-3" name="" id="">
            <option value="gender">Gender</option>
            <option value="gender">Male</option>
            <option value="gender">Female</option>
        </select>
        <label className="me-3" For="card">Status</label>
        <select className="" name="" id="">
            <option value="gender">Active</option>
            <option value="gender">UnActive</option>
        </select>
    
        <Button style={{width : '100%'}} className="d-block mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNewUser;
