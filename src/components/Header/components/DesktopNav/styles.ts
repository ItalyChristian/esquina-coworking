import styled from 'styled-components';

export const NavBar = styled.div``;

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBarUl = styled.ul`
  display: flex;
  gap: clamp(6rem, 5.5vw, 10rem);

  list-style-type: none;

  font-size: clamp(1.5rem, 100%, 3rem);

  cursor: pointer;
`;

export const Link = styled.li`
  color: white;

  :hover {
    border-bottom: 0.2rem solid var(--green);
  }
`;


export const Anchor = styled.a``;
