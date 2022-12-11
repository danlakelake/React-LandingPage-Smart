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
            <NavLinks to="/#" activeClassName={"active"}  >Home</NavLinks>
            <NavLinks to="#about" activeClassName={"active"}  >About</NavLinks>
            <NavLinks to="#portfolio" activeClassName={"active"} >Portfolio</NavLinks>
            <NavLinks to="#subscribe" activeClassName={"active"} >Subscribe</NavLinks>
            <NavLinks to="#contact" activeClassName={"active"} >Contact</NavLinks>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ContainerNavbar>
  )
}

export default MainNavbar;