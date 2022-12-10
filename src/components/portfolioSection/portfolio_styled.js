import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
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
  margin-top: 1rem;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${ColorVariables.mainBlack};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Cards = styled.div`
  display: flex;
`;
