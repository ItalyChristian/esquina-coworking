import styled, { keyframes } from "styled-components";

import Image from 'next/image';

export const Placeholder = styled.div`
  background-color: var(--grey);
`;

export const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-between;
  position: ${({ isActive }) => isActive ?  'fixed' : 'absolute'};

  padding: 0 15%;

  background-color: ${({ isActive }) => isActive ?  '#838F6799' : 'transparent'};

  border-radius: ${({ isActive }) => isActive ? '0 0 3rem 3rem' : '0'};
  box-shadow: ${({ isActive }) => isActive ?  '0px 0px 30px 15px var(--dark-grey)' : 'unset'};

  animation: ${({ isActive }) => isActive ? 'animationForwardNav 1s' : 'animationBackwardNav 1s'};
  animation-fill-mode: ${({ isActive }) => isActive ? 'forwards' : 'none'};
  transition: 1s;

  @keyframes animationForwardNav {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes animationBackwardNav {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  z-index: 10;

  @media screen and (max-width: 1440px) {
    padding: 0 10%;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 15rem;
  max-width: 15rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;

  @media screen and (max-width: 767px) {
    min-width: 3.8rem;
    max-width: 3.8rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;

  cursor: pointer;

  background: transparent;

  @media screen and (max-width: 768px) {
    max-width: 15rem;    
    max-height: 4rem;
  }
`;
