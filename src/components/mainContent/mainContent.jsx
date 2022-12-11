import React from 'react';
import Slider from '../slider/slider';
import About from '../aboutSection/about';
import Portfolio from '../portfolioSection/portfolio';
import Subscribe from '../subscribeSection/subscribe';
import { MainContainer } from './mainContent_styled';

const MainContent = () => {
  return (
    <MainContainer>
        <Slider/>
        <About/>
        <Portfolio/>
        <Subscribe/>
    </MainContainer>
  )
}

export default MainContent;