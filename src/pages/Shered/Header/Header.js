import React from 'react';
import { Button, Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Car Ginias</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/Home#home">Home</Nav.Link>
      <Nav.Link as ={HashLink} to="/Home#services">services</Nav.Link>
      <Nav.Link as ={HashLink} to="/Home#exparts">Exparts</Nav.Link>
    {user?.email ?<Button variant="light">logout</Button>:
    <Nav.Link href="/login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>


    <Nav className="me-auto">
     
    </Nav>
    </Container>
  </Navbar>
  <br />
 

  
</>
    );
};

export default Header;