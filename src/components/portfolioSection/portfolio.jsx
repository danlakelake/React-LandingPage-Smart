import React, {useState} from 'react';
import Data from '../data/data';
import { ContainerPortfolio, TitleSection, SubTitleSection, MenuPortfolio, MenuLinks, Links, ContainerCards, Cards, TitleCards, DescCards } from './portfolio_styled';

const Portfolio = () => {

  //STATES
  const [item, setItem] = useState(Data);

  return (
    <ContainerPortfolio id="portfolio">
        <TitleSection>Our Porfolio</TitleSection>
        <SubTitleSection>Stop wasting time and money designing and managing a website that doesn't get reults. Happiness guaranteed!</SubTitleSection>
        <MenuPortfolio>
          <MenuLinks>
            <Links>All work</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Branding</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Planing</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Research</Links>
          </MenuLinks>
          <MenuLinks>
            <Links>Contact</Links>
          </MenuLinks>
        </MenuPortfolio>

        <ContainerCards>
        {item.map((val) => {
          return(
            <Cards key={val.id}>
              <img src={val.img} alt="portfolio-1" />
              <TitleCards>{val.title}</TitleCards>
              <DescCards>{val.desc}</DescCards>
            </Cards>
          )
        })}
        </ContainerCards>


    </ContainerPortfolio>
  )
}

export default Portfolio;