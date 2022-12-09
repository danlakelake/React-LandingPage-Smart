import React from 'react';
import MainNavbar from '../navbar/navbar';
import Slider from '../slider/slider';
import { MainContainer } from './mainContent_styled';

const MainContent = () => {
  return (
    <MainContainer>
        <MainNavbar/>
        <Slider/>
    </MainContainer>
  )
}

export default MainContent;