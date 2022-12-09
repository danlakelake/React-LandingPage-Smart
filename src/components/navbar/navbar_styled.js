import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerNavbar = styled.div`
  width: 100%;

  .navbar {
    padding: 1.2rem 2rem;
    background: -webkit-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
    background: -o-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
    background: linear-gradient(to right, #43cae9 0%, #38f9d7 100%);
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    z-index: 999;

    img {
      max-width: 200px;
    }

    .navbar-nav {
      margin-left: auto;
      gap: 30px;

      .nav-link {
        text-transform: uppercase;
        transition: all 0.3s ease-out 0s;
        color: ${ColorVariables.mainWhite};

        &.active {
          border-bottom: 5px solid ${ColorVariables.mainWhite};

          @media ${Device.tablet} {
            border-bottom: none;
            color: ${ColorVariables.mainBlack};
          }
        }
      }

      .navbar-toggler {
        &:focus {
          box-shadow: none;
          outline: none;
        }
      }

      @media ${Device.tablet} {
        gap: 10px;
        margin-top: 10px;
      }
    }
  }
`;
