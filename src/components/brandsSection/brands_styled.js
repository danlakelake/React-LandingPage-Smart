import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerBrands = styled.section`
  display: block;
  background-color: ${ColorVariables.lightGrey};
  padding: 4rem 6rem;

  .carousel {
    .carousel-indicators {
      display: none;
    }
    .carousel-inner {
      .carousel-item {
        top: 30%;
        text-align: center;
      }
    }
  }
`;

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  padding: 0 6rem;

  @media ${Device.tablet} {
    padding: 0 4rem;
    gap: 20px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 150px;
  }
`;
