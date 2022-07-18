import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
 
  padding: 5rem;

  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavBar = styled.div`
  width: 80%;
  
  display: flex;

  position: relative;

  @media screen and (max-width: 1440px) {
    height: 8rem;
  }

  @media screen and (max-width: 1024px) {
    height: 5rem;
  }

  @media screen and (max-width: 425px) {
    width: 85%;
  }

  @media screen and (max-width: 390px) {
    height: 4rem;
    width: 80%;
  }
`;

export const TabAnimation = styled.div<{tabPosition: number; color: string }>`  
  width: 20%;
  height: 11rem;

  top: 0;
  left: 0;
  position: absolute;

  transform: translateX(${({tabPosition}) => tabPosition * 100}%);
  transition-timing-function: cubic-bezier(1, 0.16, 0.32, 0.95);
  transition-duration: 0.3s;

  background-color: ${({ color }) => color};

  z-index: -1;

  @media screen and (max-width: 1440px) {
    height: 8rem;
  }
`;


export const Tab = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition-duration: 0.6s;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

export const Icon = styled.div`
  svg{
    width: 2rem;
    height: 2rem;

    fill: white;
  }
`;

export const Content = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;

  display: flex;

  gap: 5rem;

  background-color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;

    padding: 2rem;
  }
`;

