import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerPortfolio = styled.section`
  text-align: center;
  background-color: ${ColorVariables.lightGrey};
`;

export const TitleSection = styled.h1`
  color: ${ColorVariables.mainBlack};
`;

export const SubTitleSection = styled.p`
  color: ${ColorVariables.menusGrey};
`;

export const MenuPortfolio = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
  white-space: nowrap;
  gap: 20px;

  @media ${Device.tablet} {
    display: block;
  }
`;

export const MenuPortfolioLinks = styled.li`
  text-transform: uppercase;
  margin-top: 2rem;
  font-weight: bold;
`;

export const MenuLinks = styled(Link)`
  text-decoration: none;
  color: ${ColorVariables.mainBlack};
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-bottom: 5px;

  &:hover {
    color: ${ColorVariables.tealColor};
    border-bottom: 5px solid ${ColorVariables.tealColor};
    transition: all 0.3s ease-out 0s;
  }

  &:focus {
    color: ${ColorVariables.tealColor};
    border-bottom: 5px solid ${ColorVariables.tealColor};
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 6rem;
  gap: 50px;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const Cards = styled.div`
  cursor: pointer;
  text-align: left;
  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    border-radius: 15px;
    max-width: 300px;
    max-height: 300px;
  }

  @media ${Device.tablet} {
    text-align: center;
  }
`;

export const TitleCards = styled.h3`
  color: ${ColorVariables.mainBlack};
  margin-top: 2rem;
`;

export const DescCards = styled.p`
  color: ${ColorVariables.mainBlack};
`;
