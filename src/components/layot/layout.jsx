import React from 'react';
import MainNavbar from '../navbar/navbar';
import MainContent from '../mainContent/mainContent';
import { ContainerLayout } from './layout_styled';

const  Layout = () => {
  return (
    <ContainerLayout>
        <MainNavbar/>
        <MainContent/>
    </ContainerLayout>
  )
}

export default Layout;