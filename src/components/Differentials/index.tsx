import React from 'react';

import * as S from './styles';

import Relogio from '../../assets/images/clock-icon.svg';
import Localizacao from '../../assets/images/location-icon.svg';
import PetFriendly from '../../assets/images/pet-friendly-icon.svg';

const Differentials: React.FC = () => {
  return (
    <S.Container>
      <S.TopTextContainer>
        <S.TitleContainer>
          <S.Title>Nossos diferenciais</S.Title>
        </S.TitleContainer>

        <S.Subtitle lang="pt-br">Pensando no melhor, trouxemos para você
        alguns diferenciais que podem tornar o seu espaço de trabalho algo único.
        </S.Subtitle> 
      </S.TopTextContainer>

      <S.CardsContainer>
        <S.CardItem>
          <S.Item src={require("../../assets/images/24HCON2.png")} alt="Relógio ícone ilutastrivo" />
          <S.ItemTitle>Acesso 24h</S.ItemTitle>
          <S.Description lang="pt-br">
            Sem horario para chegar!
            Tenha acesso ao local 24h, entre e saia quando quiser. 
          </S.Description>
        </S.CardItem>

        <S.CardItem>
          <S.Item src={require("../../assets/images/localizacao.png")} alt="Localização ícone ilustrativo" />
          <S.ItemTitle>Localização privilegiada</S.ItemTitle>
          <S.Description lang="pt-br">
            Localizado no centro de Curitiba, possui fácil acesso, a pé, 
            de bicicleta e perto de pontos de ônibus.
          </S.Description>
        </S.CardItem>

        <S.CardItem>
          <S.Item src={require("../../assets/images/petfriendly.png")} alt="Pet Friendly ícone ilustrativo" />
          <S.ItemTitle>Pet Friendly</S.ItemTitle>
          <S.Description lang="pt-br">
            Somos Pet Friendly.
            Aqui você pode trazer seu melhor amigo para te fazer companhia!
          </S.Description>
        </S.CardItem>
      </S.CardsContainer>
    </S.Container>
  )
}

export default Differentials;