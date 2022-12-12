import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerContact = styled.section`
  text-align: center;
`;

export const TitleSection = styled.h1`
  color: ${ColorVariables.mainBlack};
`;

export const SubTitleSection = styled.p`
  color: ${ColorVariables.menusGrey};
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 1rem 1rem;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerDesc = styled.div`
  display: block;
  text-align: left;
  padding: 0 3rem;
  margin-top: auto;
  margin-bottom: auto;

  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    color: ${ColorVariables.menusGrey};
  }

  @media ${Device.tablet} {
    text-align: center;
  }
`;

export const ContainerForm = styled.div`
  display: block;
  text-align: left;
  padding: 2rem;

  input,
  textarea {
    border-radius: 0px;

    &:focus {
      box-shadow: none;
      border: 1px solid ${ColorVariables.tealColor};
    }
  }

  @media ${Device.tablet} {
    padding: 1rem;
  }
`;

export const BtnForm = styled.button`
  display: block;
  margin-top: 2rem;
  padding: 10px 3rem;
  border-radius: 50px;
  border: 0;
  color: ${ColorVariables.mainWhite};
  background: -webkit-linear-gradient(
    left,
    #43cae9 0%,
    #38f9d7 50%,
    #43cae9 100%
  );
  background: -o-linear-gradient(left, #43cae9 0%, #38f9d7 50%, #43cae9 100%);
  background: linear-gradient(to right, #43cae9 0%, #38f9d7 50%, #43cae9 100%);
  background-size: 200% auto;
  -webkit-transition: all 0.1s ease-out 0s;
  -moz-transition: all 0.1s ease-out 0s;
  -ms-transition: all 0.1s ease-out 0s;
  -o-transition: all 0.1s ease-out 0s;
  -webkit-transition: all 0.1s ease-out 0s;
  transition: all 0.1s ease-out 0s;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    background-position: right center;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 16%);
  }
`;
