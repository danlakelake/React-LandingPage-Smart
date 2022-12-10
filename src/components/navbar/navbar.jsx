import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoSmart from '../../assets/images/logo/logo-smart.png';
import { ContainerNavbar, NavLinks } from './navbar_styled';

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
            <NavLinks to="/#" >Home</NavLinks>
            <NavLinks to="#about" >About</NavLinks>
            <NavLinks to="#portfolio">Portfolio</NavLinks>
            <NavLinks to="#pricing">Subscribe</NavLinks>
            <NavLinks to="#contact">Contact</NavLinks>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ContainerNavbar>
  )
}

export default MainNavbar;