import React from 'react';

import * as S from './styles';

import {
  PARCERIAS_ESTACIONAMENTO_URL,
  PARCERIAS_FLEXCAMBIO_URL,
  PARCERIAS_AIRBNB_URL,
  PARCERIAS_BEERMAD_URL,
  PARCERIAS_SVEA_URL,
  PARCERIAS_REMESSA_URL,
  PARCERIAS_VIAJOSEGURO_URL,
  PARCERIAS_CGTMADVOCACIA_URL,
  PARCERIAS_ARTIGOSPET_URL,
  PARCERIAS_JORNALISTANDO_URL 
} from '../../utils/constants';

export default function Advantages() {
  return (
    <S.Container>
      <S.TopTextContainer>
        <S.TitleContainer>
          <S.Title>Clube de Benefícios</S.Title>
        </S.TitleContainer>

        <S.Description lang="pt-br">
          Sabia que possuímos um clube de benefícios especial para você?
        </S.Description> 
      </S.TopTextContainer>

      <S.CardsContainer>
          <S.Link href={PARCERIAS_ESTACIONAMENTO_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071271938_f8dec46436_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo do Estacionamento Nickel"/>
          </S.Link>

          <S.Link href={PARCERIAS_FLEXCAMBIO_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071491799_c3872748f7_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Flex Câmbio"/>
          </S.Link>

          <S.Link href={PARCERIAS_AIRBNB_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071260741_afe576a8cc_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Airbnb"/>
          </S.Link>

          <S.Link href={PARCERIAS_BEERMAD_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071488939_56040db1bf_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Beer Mad Batel"/>
          </S.Link>

          <S.Link href={PARCERIAS_SVEA_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071263956_38736af426_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da SVEA"/>
          </S.Link>
      
          <S.Link href={PARCERIAS_REMESSA_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071270073_ed38967657_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Remessa Fácil"/>
          </S.Link>

          <S.Link href={PARCERIAS_VIAJOSEGURO_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071270033_c04c9a47a1_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Viajo Seguro"/>
          </S.Link>

          <S.Link href={PARCERIAS_CGTMADVOCACIA_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071267278_e8dfd63e2f_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da CGTM Advogados"/>
          </S.Link>

          <S.Link href={PARCERIAS_ARTIGOSPET_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071263951_2dbac96942_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da ULI Artigos Pet"/>
          </S.Link> 

          <S.Link href={PARCERIAS_JORNALISTANDO_URL} target="_blank">
            <S.Card src="https://live.staticflickr.com/65535/52071258726_99f8aa2f0a_b.jpg" width="100%" height="100%" loading="lazy" alt="Logo da Jornalistando"/>
          </S.Link> 
    
      </S.CardsContainer>
    </S.Container>
  );
}
