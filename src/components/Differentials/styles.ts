import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  padding: 5rem;

  background-color: #F6F5F5;
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

  @media screen and (max-width: 320px) {
    width: 70vw;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 100%, 3rem);
`;

export const Subtitle = styled.p`
  font-size: clamp(1.5rem, 100%, 2.2rem);
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    gap: 5rem; 
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20rem;
`;

export const Item = styled.img`
  width: 100%;
  max-width: 15rem;
  height: 100%;
  max-height: 15rem;

  position: absolute;
`;

export const ItemTitle = styled.p`
  font-size: clamp(1.5rem, 100%, 2rem);
`;

export const Description = styled.p`
  font-size: clamp(1.5rem, 100%, 2.2rem);
  text-align: center;
`;

