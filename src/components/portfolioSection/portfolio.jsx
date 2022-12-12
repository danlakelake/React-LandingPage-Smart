import React, {useState} from 'react';
import Data from '../data/data';
import { ContainerPortfolio, TitleSection, SubTitleSection, MenuPortfolio, MenuPortfolioLinks, MenuLinks, ContainerCards, Cards, TitleCards, DescCards } from './portfolio_styled';

const Portfolio = () => {

  //STATES
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];


  // Comparing category for displaying data
  const filterItem = (currentcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === currentcat; 
    });
    setItem(newItem);
  };

  return (
    <ContainerPortfolio id="portfolio">
        <TitleSection>Our Porfolio</TitleSection>
        <SubTitleSection>Stop wasting time and money designing and managing a website that doesn't get reults. Happiness guaranteed!</SubTitleSection>

        <MenuPortfolio>
        <MenuPortfolioLinks>
            <MenuLinks onClick={() => setItem(Data)}>All Work</MenuLinks>
        </MenuPortfolioLinks>
        {menuItems.map((Val, id) => {
          return (
            <>
            <MenuPortfolioLinks>
              <MenuLinks key={id} onClick={() => filterItem(Val)}>{Val}</MenuLinks>
            </MenuPortfolioLinks>
            </>
          )
        })}
        </MenuPortfolio>

        <ContainerCards>
        {item.map((Val) => {
          return(
            <Cards key={Val.id}>
              <img src={Val.img} alt="portfolio-1" />
              <TitleCards>{Val.title}</TitleCards>
              <DescCards>{Val.desc}</DescCards>
            </Cards>
          )
        })}
        </ContainerCards>


    </ContainerPortfolio>
  )
}

export default Portfolio;