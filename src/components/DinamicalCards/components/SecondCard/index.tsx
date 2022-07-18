import React from 'react';

import * as S from './styles';

const SecondCard = () => {
  return (
    <S.Container id="second-card">
      <S.BannerImage src="https://live.staticflickr.com/65535/52070266002_4728a25905_k.jpg" alt="Imagem Ilustrativa"/>

      <S.BannerTexts>
        <S.BannerTitle>Endereço Fiscal</S.BannerTitle>
        
        <S.BannerDescription lang="pt-br">
          Vincule seu endereço fiscal conosco, 
          e faremos a gestão para melhorar sua comodidade. 
          Registre, emita notas, e receba correspondências em um 
          local privilegiado e de ótimo acesso em Curitiba e sem ter 
          a necessidade de um espaço físico e altos custos.
        </S.BannerDescription>
      </S.BannerTexts>
    </S.Container>
  )
};

export default SecondCard;