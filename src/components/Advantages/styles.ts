import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  padding: 5rem;
`;

export const TopTextContainer = styled.div``;

export const TitleContainer = styled.div`
  width: 90vw;
  height: 100%;
  max-height: 8.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  background: rgba(131, 143, 103, 0.4);
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 100%, 3rem);
`;

export const Description = styled.p`
  font-size: clamp(1.5rem, 100%, 2.2rem);

  @media screen and (max-width: 390px) {
    width: 85%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10rem;

  @media screen and (max-width: 550px){
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export const Card = styled.img`
  width: 100%;
  max-width: 15.625rem;
  height: 100%;
  max-height: 15.625rem;

  @media screen and (max-width: 550px){
    max-width: 12rem;
  }

`;

export const Link = styled.a``;

export const CardDescription = styled.p`
  text-align: center;
`;

