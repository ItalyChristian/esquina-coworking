import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--dark-grey);
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;

  padding: 5rem;

  @media screen and (max-width: 768px){
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    padding: unset;
    padding-top: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 768px){
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 768px){
    align-items: center;
    gap: 1rem;
  }
`;

export const Wrapper = styled.div``;

export const ContactTitle = styled.h1`
  color: white;
  font-size: clamp(2rem, 100%, 4.4rem);
`;

export const Map = styled.div``;

export const MapDescription = styled.p`
  font-size: clamp(1rem, 100%, 2rem);
  font-weight: 400;
  color: white;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;

  @media screen and (max-width: 768px){
    gap: 2rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px){
    flex-direction: unset;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  gap: 1rem;
`;

export const SocialMediaTitle = styled.h1`
  color: white;
  font-size: clamp(2rem, 100%, 3rem);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: 768px){
    width: 3rem;
    height: 3rem;
  }
`;

export const LogoName = styled.p`
  color: white;
  font-size: clamp(1.2rem, 100%, 2rem);

  @media screen and (max-width: 540px){
    display: none;
  }
`;

export const SeparatorLine = styled.img`
  @media screen and (max-width: 768px){
    height: 2rem;

    transform: rotate(-90deg);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px){
    gap: unset;
  }

  @media screen and (max-width: 340px){
    width: 100%;
    max-width: 20rem; 
  }
`;

export const FormTitle = styled.h1`
  color: white;
  font-size: clamp(2rem, 100%, 3rem);
`;

export const DataContainer = styled.div`
  height: 8.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
 
  background-color: var(--green1);
`;

export const CurrentData = styled.h1`
  color: white;
`;
