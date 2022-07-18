import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  margin: 0 auto;
`;

export const Form = styled.form`
  width: clamp(6.25rem, 100%, 47.36rem);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;
`;

export const Flex = styled.div`
  width: 100%;

  display: flex;
`;

export const MediaFlex = styled(Flex)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  min-width: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 1rem;

  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.0625rem;
  color: white;

  background-color: var(--green1);

  border: 1px solid var(--soft-grey);
  border-right: unset;
  border-radius: 0.5rem 0 0 0.5rem;

  white-space: nowrap;

  @media screen and (max-width: 450px) {
    min-width: 4.5rem;

    padding: 0 0.5rem;

    font-size: 0.75rem;
    letter-spacing: 0.0625rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 1rem;

  color: white;
  font-size: 1.25rem;
  font-weight: 300;

  background-color: var(--soft-grey);

  border-radius: 0 0.5rem 0.5rem 0;
  border: 1px solid var(--soft-grey);

  outline: none;

  transition: 0.125s ease;

  :focus {
    border: 2px solid var(--grey);
  }

  @media screen and (max-width: 450px) {
    width: clamp(13rem, 10vw, 15rem);
    height: 2.25rem;
    
    padding-left: 0.5rem;

    font-size: 0.9375rem;
  }
`;

export const InputMaskControl = styled.div`
  input{
    width: 100%;
    height: 100%;

    background-color: var(--soft-grey);

    border-radius: 0 0.5rem 0.5rem 0;
    border: 1px solid var(--soft-grey);

    outline: none;

    @media screen and (max-width: 450px) {
      width: 13rem;
      height: 2.25rem;
    }
  }
`;

export const TextArea = styled.input`
  width: 100%;
  height: 10rem;

  padding: 1rem;

  color: white;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.125rem;

  background-color: var(--soft-grey);

  border-radius: 0.5rem;
  border: 1px solid var(--soft-grey);

  outline: none;

  transition: 0.125s ease;

  resize: none;

  :focus {
    border: 2px solid var(--grey);
  }

  @media screen and (max-width: 450px) {
    width: 17.5rem;

    font-size: 0.9375rem;
  }
`;

export const Button = styled.button`
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  position: relative;

  color: white;
  font-size: 1.5rem;

  border: none;
  border-radius: 0.5rem;


  background: var(--green1);
  white-space: nowrap;

  transition: 0.25s ease;

  cursor: default;

  :not(:disabled):hover {
    cursor: pointer;
    filter: grayscale(0);
  }

  :disabled:hover::after {
    content: 'Verifique se inseriu um e-mail \nválido ou se não deixou algum campo em branco.';

    width: 100%;
    max-width: 20rem;

    font-size: 1rem;
    text-align: center;

    position: absolute;
    top: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);

    padding: 0.5rem;

    border-radius: 0.5rem;

    background-color: var(--grey);
    white-space: pre-wrap;
  }

  @media screen and (max-width: 1024px) {
    height: 2.25rem;

    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    width: clamp(17.5rem, 100%, 30rem);
    height: 2rem;

    font-size: 1rem;
  }
`;

export const ClearButton = styled.div`
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  position: relative;

  color: white;
  font-size: 1.5rem;

  border: none;
  border-radius: 0.5rem;


  background: var(--green1);
  white-space: nowrap;

  transition: 0.25s ease;

  cursor: default;

  :not(:disabled):hover {
    cursor: pointer;
    filter: grayscale(0);
  }

  :disabled:hover::after {
    content: 'Verifique se inseriu um e-mail \nválido ou se não deixou algum campo em branco.';

    width: 100%;
    max-width: 20rem;

    font-size: 1rem;
    text-align: center;

    position: absolute;
    top: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);

    padding: 0.5rem;

    border-radius: 0.5rem;

    background-color: var(--grey);
    white-space: pre-wrap;
  }

  @media screen and (max-width: 1024px) {
    height: 2.25rem;

    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    height: 2rem;

    font-size: 1rem;
  }
`;