import React from 'react';

import * as S from './styles';

const FirstCard = () => {
  return (
    <S.Container id="first-card" >
      <S.BannerImage src="https://live.staticflickr.com/65535/52071314146_3e34c09b38_k.jpg" alt="Imagem Ilustrativa"/>

      <S.BannerTexts>
        <S.BannerTitle>Salas de Reunião</S.BannerTitle>
        
        <S.BannerDescription lang="pt-br"> 
          Nossas salas de reunião atendem 
          até 6 pessoas e dispoêm de pontos de tomadas, ar-condicionado, 
          televisores com entrada HDMI para projeção, mesa ampla e cadeiras 
          confortáveis. Uma infraestrutura completa para receber seus clientes 
          ou funcionários.
        </S.BannerDescription>
      </S.BannerTexts>
    </S.Container>
  )
};

export default FirstCard;