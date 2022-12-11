import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerNavbar = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;

  .navbar {
    padding: 1.2rem 2rem;
    background: -webkit-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
    background: -o-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
    background: linear-gradient(to right, #43cae9 0%, #38f9d7 100%);
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);

    img {
      max-width: 200px;
    }

    .navbar-nav {
      margin-left: auto;
      gap: 30px;

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

export const NavLinks = styled(Link)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${ColorVariables.mainWhite};
  cursor: pointer;

  &.active {
    border-bottom: 5px solid ${ColorVariables.mainWhite};
  }

  &:hover {
    border-bottom: 5px solid ${ColorVariables.mainWhite};
    color: ${ColorVariables.mainWhite};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    transition: all 0.3s ease-out 0s;

    @media ${Device.tablet} {
      border-bottom: none;
      color: ${ColorVariables.mainBlack};
    }
  }
`;
