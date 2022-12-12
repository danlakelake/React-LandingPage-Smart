import styled from 'styled-components';
import { NavHashLink as Link } from 'react-router-hash-link';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerFooter = styled.div`
  display: block;
  background-color: ${ColorVariables.lightGrey};
`;

export const ContainerMenus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5rem;
  text-align: center;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const FooterMenus = styled.ul`
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;

  @media ${Device.tablet} {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const TitleMenus = styled.h4`
  color: ${ColorVariables.mainBlack};
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

export const SectionLinks = styled.li`
  color: ${ColorVariables.menusGrey};
  margin-bottom: 10px;
`;

export const Links = styled(Link)`
  color: ${ColorVariables.menusGrey};
  margin-bottom: 10px;
  text-decoration: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${ColorVariables.tealColor};
  }
`;

export const ContainerBottomFooter = styled.div`
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  text-align: left;
  margin: auto;
  background: -webkit-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
  background: -o-linear-gradient(left, #43cae9 0%, #38f9d7 100%);
  background: linear-gradient(to right, #43cae9 0%, #38f9d7 100%);

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const TextCopyRight = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  margin: auto;

  a {
    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Raleway';
    color: ${ColorVariables.mainBlack};
  }
`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  margin: auto;
  cursor: pointer;

  img {
    max-width: 150px;
  }
`;

export const ContainerSocialIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  margin: auto;
  gap: 15px;
  color: ${ColorVariables.mainWhite};

  svg {
    font-size: 1.6rem;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
  }
`;
