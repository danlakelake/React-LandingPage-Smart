import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
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
  color: ${ColorVariables.mainBlack};
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
`;

export const MenuLinks = styled.li`
  text-transform: uppercase;
  margin-top: 2rem;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${ColorVariables.mainBlack};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 6rem;
  gap: 50px;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Cards = styled.div`
  cursor: pointer;
  text-align: left;

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
