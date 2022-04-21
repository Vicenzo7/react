import { Button } from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddUser = () => {
  useEffect(() => {
    document.title = "Add User";
  }, []);

  const [user, setUser] = useState({});
  //form handler function(handleForm)
  const handleForm = (e) => {
    console.log(user);
    postDataToServer(user);
    e.preventDefault();
  };

  //creating function top post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/users`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("User added Successfullly", {
          position: "top-center",
        });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went Wrong", {
          position: "top-center",
        });
      }
    );
  };

  return (
    <Fragment>
      <h1 className=" text-center my-3">Fill User Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">User Id</Label>
          <Input
            id="userId"
            name="userId"
            placeholder="Enter here"
            type="text"
            onChange={(e) => {
              setUser({ ...user, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">User name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
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
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
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
            onChange={(e) => {
              setUser({ ...user, number: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success ml-2">
            Add User
          </Button>{" "}
          <Button type="reset" color="warning ml-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddUser;
