import React, {useEffect} from "react";
import { Container, Button, Card, CardBody } from "reactstrap";

const Home = () => {

  useEffect(()=>{
    document.title="Home";
}, []);


  return (
    <div>
      <Container className="text-center">
        <Card className=" my-3 bg-info">
          <CardBody>
            <h1>Welcome to home page</h1>
            <p>WELCOME to User Managemnet</p>

            <Button color="primary" outline>
              Get Started
            </Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
