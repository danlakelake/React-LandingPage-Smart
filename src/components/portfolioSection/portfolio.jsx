import React from 'react';
import { ContainerPortfolio, TitleSection, SubTitleSection, MenuPortfolio, MenuLinks, Links } from './portfolio_styled';

const Portfolio = () => {
  return (
    <ContainerPortfolio id="portfolio">
        <TitleSection>Our Porfolio</TitleSection>
        <SubTitleSection>Stop wasting time and money designing and managing a website that doesn't get reults. Happiness guaranteed!</SubTitleSection>
        <MenuPortfolio>
          <MenuLinks>
            <Links>Home</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>About</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Portfolio</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Subscribe</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Contact</Links>
          </MenuLinks>
        </MenuPortfolio>

    </ContainerPortfolio>
  )
}

export default Portfolio