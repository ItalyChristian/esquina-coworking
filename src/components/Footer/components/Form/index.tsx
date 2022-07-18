/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useCallback, useState, MouseEvent } from 'react';

import * as S from './styles';

import { isValidEmail } from '../../../../utils/constants';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputMask from "react-input-mask";

import emailjs from '@emailjs/browser';

const Form = () => {
  
  const SERVICE_ID = 'service_ziy0w2b';
  const TEMPLATE_ID = 'template_e2tw5at';
  const PUBLIC_KEY = 'y7sDZh_WM9cPeYpSp';

  const [subject, setSubject] = useState<string>('');
  const [fromMail, setFromMail] = useState<string>('');
  const [fromName, setFromName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const asyncSendMail = useCallback(async ({ subject, fromMail, fromName, contactPhone, message }: any) => {
    const templateParams = {
      subject: subject,
      to_name: "Esquina Coworking",
      from_name: fromName,
      from_mail: fromMail,
      contact_phone: contactPhone,
      message: message,   
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  }, []);

  const handleSendMail = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    toast.promise(asyncSendMail({ subject, fromMail, fromName, contactPhone, message }), {
      success: 'Mensagem enviada com sucesso!',
      error: 'Houve um erro ao tentar enviar sua mensagem. Por favor, tente novamente.'
    });

  }, [asyncSendMail, subject, fromMail, fromName, contactPhone, message]);

  const isSubmitDisabled = () => {

    if (!fromName || !subject || !fromMail || !contactPhone || !message) return true;

    if (!isValidEmail(fromMail)) return true;

    return false;
  };

  const clearForm = () => {
    (document.getElementById("nome") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("celular") as HTMLInputElement).value = "";
    (document.getElementById("assunto") as HTMLInputElement).value = "";
    (document.getElementById("message") as HTMLInputElement).value = "";
  };

  const handleChangeSubject = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      setSubject(inputElement.value);
    },
    []
  );

  const handleChangeFromMail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      setFromMail(inputElement.value);
    },
    []
  );
  
  const handleChangeFromName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      setFromName(inputElement.value);
    },
    []
  );

  const handleChangeContactPhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      setContactPhone(inputElement.value);
    },
    []
  );

  const handleChangeMessage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      setMessage(inputElement.value);
    },
    []
  );

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form id="form">
          <S.Flex>
            <S.Label htmlFor="Nome">Nome</S.Label>
            <S.Input
              id="nome"
              autoComplete="off"
              name="from_name"
              onChange={handleChangeFromName}
              value={fromName}
            />
          </S.Flex>

          <S.MediaFlex style={{ gap: '1rem' }}>
            <S.Flex>
              <S.Label htmlFor="E-mail">E-mail</S.Label>
              <S.Input
                name="from_mail"
                id="email"
                autoComplete="off"
                onChange={handleChangeFromMail}
                value={fromMail}
              />
            </S.Flex>
            
            <S.Flex>
              <S.Label htmlFor="Celular">Celular</S.Label>
              <S.InputMaskControl>
                <InputMask
                  name="contact_phone"
                  id="celular"
                  autoComplete="off"
                  onChange={handleChangeContactPhone}
                  value={contactPhone}
                  mask="(99)99999-9999"
                />
              </S.InputMaskControl>
            </S.Flex>
          </S.MediaFlex>

          <S.Flex>
            <S.Label htmlFor="Assunto">Assunto</S.Label>
            <S.Input
              id="assunto"
              autoComplete="off"
              name="subject"
              onChange={handleChangeSubject}
              value={subject} 
            />
          </S.Flex>

          <S.TextArea
            id="message"
            placeholder="Digite sua mensagem aqui..."
            name="message"
            onChange={handleChangeMessage}
            value={message}
          />

          <S.Button id="button" type="submit" aria-label="enviar mensagem" disabled={isSubmitDisabled()} onClick={handleSendMail}>
            <S.ClearButton onClick={clearForm}>
              Enviar
            </S.ClearButton>
          </S.Button>  
        </S.Form>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
         />
      </S.Wrapper>
    </S.Container>
  );
  
};

export default Form;