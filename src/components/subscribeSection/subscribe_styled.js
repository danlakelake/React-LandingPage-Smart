import styled from 'styled-components';
import Device from '../../styles/breakPoints';
import ColorVariables from '../../styles/variables';

export const ContainerSubscribe = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 8rem 7rem;
  gap: 10px;

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    padding: 5rem;
    text-align: center;
    gap: 40px;
  }
`;

export const ContainerTitle = styled.div`
  display: block;
`;

export const TitleSection = styled.h1`
  color: ${ColorVariables.mainBlack};
  text-transform: capitalize;
`;

export const SubTitleSection = styled.p`
  color: ${ColorVariables.mainBlack};
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 1rem 3rem;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;

    &:focus {
      box-shadow: none;
      border: 1px solid ${ColorVariables.tealColor};
    }
  }
`;

export const BtnForm = styled.button`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: ${ColorVariables.mainWhite};
  padding: 1rem 2rem;
  border: 0;
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
  transition: all 0.1s ease-out 0s;
  transition: 0.3s ease-in-out;

  &:hover {
    background-position: right center;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 16%);
  }
`;
