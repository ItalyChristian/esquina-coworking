import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  position: relative;

  margin: 0;
`;

export const HamburgerNav = styled.nav``;

export const HamburgerUl = styled.ul<{ isClicked: boolean }>`
  width: clamp(50%, 45rem, 70%);
  height: 100vh;

  display: ${({ isClicked }) => isClicked ? 'flex' : 'none'};
  flex-direction: column;

  margin: 0;
 
  position: fixed;
  right: 0;

  list-style-type: none;

  background: var(--green);

  clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};
  -webkit-clip-path: ${({ isClicked }) => isClicked ? 'circle(2200px at 90% -20%)' : 'circle(100px at 90% -20%)'};
  transition: all 0.8s ease-out;

  z-index: 99;

  :hover{
    border-bottom: 0.2rem solid var(--green);
  }
`;

export const HamburgerLinks = styled.li`
  margin-top: 10rem;
  margin-left: 10rem;

  color: white;
  font-size: 3rem;

  @media screen and (max-width: 390px) {
    font-size: 2.5rem;
  }
`;

export const HamburgerLink = styled.a`
  cursor: pointer;

  :hover{
    border-bottom: 0.2rem solid var(--green);
  }
`;

export const HamburgerIcon = styled.button`
  width: 10rem;
  height: 10rem;

  position: absolute;
  right: 0;

  color: white;
  font-size: 4.5rem;

  border: none;

  background-color: transparent;

  z-index: 100;

  @media screen and (max-width: 390px) {
    width: 5rem;
    margin-left: 15rem;
  }
`;