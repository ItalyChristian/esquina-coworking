import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative; 

  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width:100vw;
  height:100vh;

  object-fit: cover;
  overflow: hidden;
`;

export const BannerWrapper = styled.div``;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 41.20rem;
  height: 100%;
  max-height: 46.40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: clamp(5rem, 100%, 15rem);
  margin-top: clamp(5rem, 100%, 10rem);

  padding: 2rem;

  position: absolute;

  background: rgba(131, 143, 103, 0.6);


  @media screen and (min-width: 1900px) {
    max-width: 80rem;
    max-height: 75rem;

    margin-top: 30rem;
  }

  @media screen and (max-width: 1400px) {
    max-width: 60rem;
    max-height: 50rem;

    margin-left: 15rem;
    margin-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    max-width: unset;
    max-height: 70rem;

    margin-top: 10rem;
    margin-left: 10rem;
  }

  @media screen and  (max-width: 550px) {
    display: none;
  }
`;

export const BannerTitle = styled.h1`
  color: white;
  font-size: clamp(5rem, 100%, 10rem);
  font-weight: 400;
  
  @media screen and  (max-width: 550px) {
    font-size:  2rem;
  }
`;

export const BannerParagraph = styled.p`
  width: 100%;
  max-width: 35rem;

  color: white;
  font-size: clamp(1.5rem, 100%, 2rem);
  text-align: justify;
  text-shadow: 5rem;
  hyphens: auto;

  @media screen and (min-width: 1900px) {
    max-width: 70rem;

    font-size: 2.5rem;
  }

  @media screen and (max-width: 1440px) {
    max-width: 50rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  /* @media screen and (min-width: 700px) {
    font-size: 1.8rem;
  } */
`;

export const Arrow = styled.img`
  width: 100%;
  max-width: 10rem;
  height: 100%;
  max-height: 10rem;

  @media screen and  (max-width: 390px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const IconLeft = styled.button`
  position: absolute;
  left: 2vw;

  z-index: 5;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  :before {
    display: none;
  }
  @media screen and (max-width: 768px) {
    left: 4vw;
  }
`;

export const IconRight = styled.button`
  position: absolute;
  right: 7vw;

  z-index: 5;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  :before {
    display: none;
  }

  @media screen and (max-width: 768px) {
    right: 2vw;
  }

  @media screen and (max-width: 400px) {
    right: 5vw;
  }

  @media screen and (max-width: 390px) {
    right: 7vw;
  }
`;

export const Links = styled.a``;