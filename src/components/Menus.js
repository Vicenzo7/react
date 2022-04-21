import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-user"
        action
      >
        Add User
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/all-user"
        action
      >
        View Users
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/update-user"
        action
      >
        Update User
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        About
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menus;
