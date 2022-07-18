import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 5rem;

  background-color: var(--green2);

  @media screen and (max-width: 768px) {  
    height: 70rem;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    max-height: 60rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  max-width: 47.5rem;
  height: 100%;
  max-height: 52.13rem;

  @media screen and (max-width: 768px) {
    max-height: 30rem;
  }
`;

export const BannerTexts = styled.div`
  width: 100%;
  max-width: 34.5rem;
  height: 100%;
  max-height: 39rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const BannerTitle = styled.h1`
  color: white;
  font-size: clamp(3rem, 100%, 4.7rem);
`;

export const BannerDescription = styled.p`
  color: white;
  font-size: clamp(2rem, 100%, 2.5rem);
  hyphens: auto;
`;