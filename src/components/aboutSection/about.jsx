import React from 'react';
import {FaPenSquare} from '@react-icons/all-files/fa/FaPenSquare';
import {FaExpand} from '@react-icons/all-files/fa/FaExpand';
import {FaSpinner} from '@react-icons/all-files/fa/FaSpinner';
import {FaSignal} from '@react-icons/all-files/fa/FaSignal';
import {ContainerAbout, TitleSection, SubTitleSection, ContainerCards, Cards, CardIcon, CardDescription} from './about_styled';

const About = () => {

  return (
    <ContainerAbout id="about">
      <TitleSection>FRESH DESIGN GOOD QUALITY</TitleSection>
      <SubTitleSection>An open platform for presentations and content collaboration. Sign up to get early access.</SubTitleSection>
      <ContainerCards>
        <Cards>
        <CardIcon>
            <FaPenSquare/>
          </CardIcon>          
          <CardDescription>
            <h3>Designed for everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
        <CardIcon>
            <FaExpand />
          </CardIcon>          
          <CardDescription>
            <h3>Flexibility as it is</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
          <CardIcon>
            <FaSpinner />
          </CardIcon>
          <CardDescription>
            <h3>Powerfull platform</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
          <CardIcon>
            <FaSignal />
          </CardIcon>          
          <CardDescription>
            <h3>Work in a real time</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
      </ContainerCards>
    </ContainerAbout>
  )
}

export default About;