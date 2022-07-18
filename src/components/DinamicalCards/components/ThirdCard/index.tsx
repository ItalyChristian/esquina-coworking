import React from 'react';

import * as S from './styles';

const ThirdCard = () => {
  return (
    <S.Container id="third-card">
      <S.BannerImage src="https://live.staticflickr.com/65535/52071542274_6a3e4fa5ac_k.jpg" alt="Imagem Ilustrativa"/>

      <S.BannerTexts>
        <S.BannerTitle>Salas Fixas</S.BannerTitle>
        
        <S.BannerDescription lang="pt-br">
          Tenha um espaço exclusivo 
          para seu trabalho, organize e aloque seus perteces como preferir. 
          Reserve um local para trabalhar com a sua cara e prepare-se para 
          receber seus clientes e ter a liberdade que precisa para cuidar do 
          seu negócio! Salas disponíveis de 1 à 8 pessoas.
        </S.BannerDescription>
      </S.BannerTexts>
    </S.Container>
  )
};

export default ThirdCard;