import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoSmart from '../../assets/images/logo/logo-smart.png';
import { ContainerNavbar, NavLinks } from './navbar_styled';

const MainNavbar = () => {

  const { hash } = useLocation();

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
            <NavLinks to="/#" className={hash === "" && "isactive"}>Home</NavLinks>
            <NavLinks to="#about" className={hash === "#about" && "isactive"}>About</NavLinks>
            <NavLinks to="#portfolio" className={hash === "#portfolio" && "isactive"}>Portfolio</NavLinks>
            <NavLinks to="#subscribe" className={hash === "#subscribe" && "isactive"}>Subscribe</NavLinks>
            <NavLinks to="#contact" className={hash === "#contact" && "isactive"}>Contact</NavLinks>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </ContainerNavbar>
  )
}

export default MainNavbar;