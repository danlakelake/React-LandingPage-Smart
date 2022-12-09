import React from 'react';
import MainNavbar from '../navbar/navbar';
import Slider from '../slider/slider';
import About from '../aboutSection/about';
import Portfolio from '../portfolioSection/portfolio';
import { MainContainer } from './mainContent_styled';

const MainContent = () => {
  return (
    <MainContainer>
        <MainNavbar/>
        <Slider/>
        <About/>
        <Portfolio/>
    </MainContainer>
  )
}

export default MainContent;