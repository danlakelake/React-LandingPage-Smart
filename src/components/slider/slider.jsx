import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../assets/images/slider/slider-1.jpg';
import Slider2 from '../../assets/images/slider/slider-2.jpg';
import Slider3 from '../../assets/images/slider/slider-3.jpg';
import { ContainerSlider } from './slider_styled';

const Slider = () => {
  return (
    <ContainerSlider>
         <Carousel>
      <Carousel.Item > 
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Multi-purpose Landing Page Template</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Refreshing Design & Easy to Customize</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Multi-purpose Landing Page Template</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </ContainerSlider>
  )
}

export default Slider