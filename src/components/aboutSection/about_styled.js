import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerAbout = styled.section`
  text-align: center;
`;

export const TitleSection = styled.h1`
  color: ${ColorVariables.mainBlack};
`;

export const SubTitleSection = styled.p`
  color: ${ColorVariables.menusGrey};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 2rem 3rem;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem 0;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const CardIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 5rem;
    color: ${ColorVariables.tealColor};
  }
`;

export const CardDescription = styled.div`
  font-weight: bold;
  text-align: left;

  @media ${Device.tablet} {
    text-align: center;
  }
`;
