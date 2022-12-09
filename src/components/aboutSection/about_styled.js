import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerAboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: white;
`;

export const TitleSection = styled.h1`
  color: ${ColorVariables.mainBlack};
`;

export const SubTitleSection = styled.p`
  color: ${ColorVariables.mainBlack};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 3rem;

  @media ${Device.mobileL} {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem 0;

  @media ${Device.mobileL} {
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

  @media ${Device.mobileL} {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
  }
`;
