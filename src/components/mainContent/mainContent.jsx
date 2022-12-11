import React from 'react';
import Slider from '../slider/slider';
import About from '../aboutSection/about';
import Portfolio from '../portfolioSection/portfolio';
import Subscribe from '../subscribeSection/subscribe';
import Brands from '../brandsSection/brands';
import Contact from '../contactSection/contact';
import { MainContainer } from './mainContent_styled';

const MainContent = () => {
  return (
    <MainContainer>
        <Slider/>
        <About/>
        <Portfolio/>
        <Subscribe/>
        <Brands/>
        <Contact/>
    </MainContainer>
  )
}

export default MainContent;