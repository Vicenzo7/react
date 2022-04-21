import { Button } from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const UpdateUser = (props) => {
  const location = useLocation();
  var [id, setId] = useState(location.state.id);
  var [name, setName] = useState(location.state.name);
  var [email, setEmail] = useState(location.state.email);
  var [number, setNumber] = useState(location.state.number);

  //to save the updated change into database
  const changeDetails=async() =>{
    var data = {
      'id':id,
      'name':name,
      'email': email,
      'number': number
    }
    try {
      var response=await fetch(`${base_url}/users`,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body:JSON.stringify(data)
      })
    } catch (error) {
      console.log(error);
      toast.error("Not Updated !!",{
        position:"top-center"
      })
    }
    if(response.status === 200){
      toast.success("Updated !!",{
        position:"top-center"
      })
    }
    else{
      toast.error("Backend Error!!")
    }

  }

  return (
    <Fragment>
      <h1 className=" text-center my-3">Update User Detail</h1>
      <Form>
        <FormGroup>
          <Label for="userId">User Id</Label>
          <Input
            id="userId"
            name="userId"
            placeholder="Enter here"
            type="text"
            defaultValue={id}
            readOnly={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">User name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
            defaultValue={name}
            onChange={(val) => {
              setName(val.target["value"]);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
            defaultValue={email}
            onChange={(val) => {
              setEmail(val.target["value"]);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Phone Number</Label>
          <Input
            id="number"
            name="number"
            placeholder="Enter Phone Number"
            type="text"
            defaultValue={number}
            onChange={(val) => {
              setNumber(val.target["value"]);
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button
            type="submit"
            color="success ml-2"
            onClick={(e) => {
              e.preventDefault();
              changeDetails();
            }}
          >
            Save
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default UpdateUser;
