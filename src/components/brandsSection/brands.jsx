import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Logo1 from '../../assets/images/brands/logo_01.png';
import Logo2 from '../../assets/images/brands/logo_02.png';
import Logo3 from '../../assets/images/brands/logo_03.png';
import Logo4 from '../../assets/images/brands/logo_04.png';
import Logo5 from '../../assets/images/brands/logo_05.png';

import { ContainerBrands, ContainerImages, ContainerImg } from './brands_styled';

const Brands = () => {
  return (
    <ContainerBrands>
      <Carousel>
        <Carousel.Item>
          <ContainerImages>
            <ContainerImg>
              <img
                  className="w-100"
                  src={Logo1}
                  alt="logo-1"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo2}
                  alt="logo-2"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo3}
                  alt="logo-3"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo4}
                  alt="logo-4"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo5}
                  alt="logo-5"
                />
              </ContainerImg>
            </ContainerImages>
          </Carousel.Item>
          <Carousel.Item>
          <ContainerImages>
            <ContainerImg>
              <img
                  className="w-100"
                  src={Logo1}
                  alt="logo-1"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo2}
                  alt="logo-2"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo3}
                  alt="logo-3"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo4}
                  alt="logo-4"
                />
              </ContainerImg>
              <ContainerImg>
              <img
                  className="w-100"
                  src={Logo5}
                  alt="logo-5"
                />
              </ContainerImg>
            </ContainerImages>
          </Carousel.Item>
      </Carousel>
    </ContainerBrands>
  )
}

export default Brands;