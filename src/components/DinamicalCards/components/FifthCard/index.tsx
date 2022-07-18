import React from 'react';

import * as S from './styles';

const FifthCard = () => {
  return (
    <S.Container id="fifth-card">
      <S.BannerImage src="https://live.staticflickr.com/65535/52071790365_dd55f02c93_k.jpg" />

      <S.BannerTexts>
        <S.BannerTitle>Entrega e Retirada</S.BannerTitle>
        
        <S.BannerDescription lang="pt-br">
          Registe seu endereço fiscal conosco, fique tranquilo, 
          e receba suas correspondências em nosso endereço.
          Notificamos assim que seus ofícios chegarem ao local 
          para fazer a retirada, garantindo comodidade e segurança.
        </S.BannerDescription>
      </S.BannerTexts>
    </S.Container>
  )
};

export default FifthCard;