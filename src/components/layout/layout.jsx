import React from 'react';
import MainNavbar from '../navbar/navbar';
import MainContent from '../mainContent/mainContent';
import Footer from '../footer/footer';
import { ContainerLayout } from './layout_styled';

const  Layout = () => {
  return (
    <ContainerLayout>
        <MainNavbar/>
        <MainContent/>
        <Footer/>
    </ContainerLayout>
  )
}

export default Layout;