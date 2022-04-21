import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { useNavigate } from "react-router-dom";

import "./User.css";

const User = ({ user, update }) => {
  const deleteUser = (id) => {
    axios.delete(`${base_url}/users/${id}`).then(
      (response) => {
        toast.success("User Deleted..");
        update(id);
      },
      (error) => {
        toast.error("User not deleted !! Server problem");
      }
    );
  };

  const navigate = useNavigate();

  return (
    <Card className="text-center mb-4">
      <CardBody>
        <strong>
          <CardTitle className="id">{user.id} </CardTitle>
          <CardTitle className="name">{user.name} </CardTitle>
          
        </strong>
        <CardText> {user.email} </CardText>
        <CardText> {user.number} </CardText>
      </CardBody>
      <Container className="text-center pb-3">
        <Button
          color="warning"
          onClick={() => {
            navigate(`/update-user`,{state:{id:`${user.id}`,name:`${user.name}`,email:`${user.email}`,number:`${user.number}`}});
          }}
        >
          {" "}
          Update{" "}
        </Button>{" "}
        <Button
          color="danger"
          outline
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          Delete
        </Button>
      </Container>
    </Card>
  );
};

export default User;
