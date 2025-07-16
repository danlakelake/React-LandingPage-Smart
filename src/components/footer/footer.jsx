import React from 'react';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import {FaInstagramSquare} from '@react-icons/all-files/fa/FaInstagramSquare';
import {FaLinkedin}  from '@react-icons/all-files/fa/FaLinkedin';
import LogoSmart from '../../assets/images/logo/logo-smart.png';
import { ContainerFooter, ContainerMenus, FooterMenus, TitleMenus, SectionLinks, Links,  ContainerBottomFooter, TextCopyRight, ContainerLogo, ContainerSocialIcons } from './footer_styled';

const Footer = () => {

  return (
    <ContainerFooter>
        <ContainerMenus>
            <FooterMenus> 
                <TitleMenus>Contact</TitleMenus>
                <SectionLinks>
                    <Links to="#about">About</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links to="#contact">Contact</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links to="#portfolio">Portfolio</Links>
                </SectionLinks>
            </FooterMenus>
            <FooterMenus> 
                <TitleMenus>Solutions</TitleMenus>
                <SectionLinks>
                    <Links>Facilities Services</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>Workplace Staffing</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>Project Management</Links>
                </SectionLinks>
            </FooterMenus>
            <FooterMenus>
                <TitleMenus>Product & Services</TitleMenus>
                <SectionLinks>
                    <Links>Products</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>Business</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>Developer</Links>
                </SectionLinks>
            </FooterMenus>
            <FooterMenus>
                <TitleMenus>Help & Suuport</TitleMenus>
                <SectionLinks>
                    <Links>Support Center</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>FAQ</Links>
                </SectionLinks>
                <SectionLinks>
                    <Links>Terms & Conditions</Links>
                </SectionLinks>
            </FooterMenus>
        </ContainerMenus>
        <ContainerBottomFooter>
            <TextCopyRight>Crafted by <a href="https://github.com/danlakelake/React-LandingPage-Smart" target="blank">Danlakelake</a></TextCopyRight>
            <ContainerLogo to="#">
                <img src={LogoSmart} alt="Logo-Smart" />
            </ContainerLogo>
            <ContainerSocialIcons>
            <FaFacebookSquare />
            <FaTwitterSquare/>
            <FaInstagramSquare/>
            <FaLinkedin/>
            </ContainerSocialIcons>
        </ContainerBottomFooter>
    </ContainerFooter>
  )
}

export default Footer;