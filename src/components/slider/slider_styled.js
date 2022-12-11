import styled from 'styled-components';
import Device from '../../styles/breakPoints';

export const ContainerSlider = styled.div`
  display: flex;
  .carousel {
    .carousel-inner {
      .carousel-item {
        img {
          max-height: 450px;
          min-height: 450px;
          background: no-repeat center center scroll;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          object-fit: cover !important;
          background-position: 50% 50%;
        }

        .carousel-caption {
          top: 35%;
          text-align: center;
          padding: 0 2rem;

          @media ${Device.mobileL} {
            top: 20%;
          }
        }
      }
    }

    .carousel-indicators {
      bottom: 5%;
      gap: 5px;

      button {
        width: 10px;
        height: 10px;
        border-radius: 50px;
        border: 0;

        &.active {
          width: 22px;
          background-color: #fff;
          border-radius: 50px;
        }
      }
    }
  }
`;
