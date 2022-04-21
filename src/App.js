import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import Menus from "./components/Menus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";



function App() {
  const btnHandle = () => {
    toast.success("done", {
      position: "top-center",
    });
  };

  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
              
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/add-user" exact element={< AddUser/>} />
                <Route path="/all-user" exact element={<AllUser />} />
                <Route path="/update-user" exact element={<UpdateUser />} />
              </Routes>
            
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
    
  );
};




export default App;
