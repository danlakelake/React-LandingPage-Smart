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
      bottom: 3%;
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

    .carousel-control-prev-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .carousel-control-next-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }
  }
`;
