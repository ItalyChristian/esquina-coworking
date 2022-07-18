import React from 'react';

import * as S from './styles';

const FourthCard = () => {
  return (
    <S.Container id="fourth-card">
      <S.BannerImage src="https://live.staticflickr.com/65535/52071320043_f882d34363_k.jpg" alt="Imagem Ilustrativa"/>

      <S.BannerTexts>
        <S.BannerTitle>Área Compartilhada</S.BannerTitle>
        
        <S.BannerDescription lang="pt-br">
          Use a nossa área compartilhida para se distrair um pouco, 
          aumente seus relacionamentos, interaja com novas pessoas, 
          e faça um ótimo networking (...) Também disponível para locação rápida. 
        </S.BannerDescription>
      </S.BannerTexts>
    </S.Container>
  )
};

export default FourthCard;