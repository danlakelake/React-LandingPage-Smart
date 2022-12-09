import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoSmart from '../../assets/images/logo/logo-smart.png';
import { ContainerNavbar } from './navbar_styled';

const MainNavbar = () => {
  return (
    <ContainerNavbar>
       <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={LogoSmart} alt="logo-smart" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link href="#home" activestyle="true">Home</Nav.Link>
            <Nav.Link href="#about" activestyle="true">About</Nav.Link>
            <Nav.Link href="#portfolio" activestyle="true">Portfolio</Nav.Link>
            <Nav.Link href="#pricing" activestyle="true">Pricing</Nav.Link>
            <Nav.Link href="#contact" activestyle="true">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ContainerNavbar>
  )
}

export default MainNavbar;