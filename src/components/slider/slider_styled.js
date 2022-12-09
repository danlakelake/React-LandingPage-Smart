import styled from 'styled-components';

export const ContainerCarousel = styled.section`
  display: flex;

  .carousel {
    .carousel-inner {
      .carousel-item {
        img {
          max-height: 400px;
          min-height: 400px;
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
        }
      }
    }

    .carousel-indicators {
      bottom: 5%;
      gap: 5px;

      button {
        width: 8px;
        height: 8px;
        border-radius: 50px;
        border: 0;

        &.active {
          width: 16px;
          background-color: #fff;
          border-radius: 50px;
        }
      }
    }
  }
`;
