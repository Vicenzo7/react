import React, { useState, useEffect } from "react";
import User from "./User";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

const AllUser = () => {
  useEffect(() => {
    document.title = "All Users";
  }, []);

  // //function to call server
  const getAllUsersFromServer=()=>{
      axios.get(`${base_url}/users`).then(
          (response)=>{
              //success
              
              console.log(response);
              toast.success("users has been loaded" ,{
                  position:"bottom-center",
              });
              setUsers(response.data);
          },
          (error)=>{
              //for error
              console.log(error);
              toast.error("Something went wrong",{
                  position:"bottom-center",
              } );
          }
      );
  };

  //Calling loading user function
  useEffect(() => {
      getAllUsersFromServer();
  }, []);

  const [users, setUsers] = useState([]);

  //to remove the user from frontend once its removed from backend

  const updateFront=(id)=>{
    setUsers(users.filter((c) => c.id!=id));

  };

  return (
    <div>
      <h1>All Users</h1>
      <p>List of User are</p>

      {users.length > 0
        ? users.map((item) => <User key={item.id} user={item} update={updateFront} />)
        : "No users"}
    </div>
  );
};

export default AllUser;
