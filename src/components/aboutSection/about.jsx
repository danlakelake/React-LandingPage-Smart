import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faExpand, faSpinner, faSignal} from '@fortawesome/fontawesome-free-solid'
import {ContainerAbout, TitleSection, SubTitleSection, ContainerCards, Cards, CardIcon, CardDescription} from './about_styled';

const About = () => {

  return (
    <ContainerAbout id="about">
      <TitleSection>FRESH DESIGN GOOD QUALITY</TitleSection>
      <SubTitleSection>An open platform for presentations and content collaboration. Sign up to get early access.</SubTitleSection>
      <ContainerCards>
        <Cards>
        <CardIcon>
            <FontAwesomeIcon icon={faPenSquare} />
          </CardIcon>          
          <CardDescription>
            <h3>Designed for everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
        <CardIcon>
            <FontAwesomeIcon icon={faExpand} />
          </CardIcon>          
          <CardDescription>
            <h3>Flexibility as it is</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
          <CardIcon>
            <FontAwesomeIcon icon={faSpinner} />
          </CardIcon>
          <CardDescription>
            <h3>Powerfull platform</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardDescription>
        </Cards>
        <Cards>
          <CardIcon>
            <FontAwesomeIcon icon={faSignal} />
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