import React from 'react';

import * as S from './styles';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from './data';

export interface Id{
  id: string;
}

const MySlider = ({ id }: Id) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <S.IconLeft title="Voltar slider" aria-label="slide anterior"><S.Arrow src={require("../../assets/images/SETAESQUERDA-01.png")} alt="Seta para esquerda"/></S.IconLeft>,
    nextArrow: <S.IconRight title="Avançar slider" aria-label="próximo slide"><S.Arrow src={require("../../assets/images/SETADIREITA-01.png")} alt="Seta para direita"/></S.IconRight>
  };

  return (
    <S.Container id="gallery">
      <Slider {...settings}>
        <S.BannerWrapper key={"first-image"}>
          <S.TextWrapper>
            <S.BannerTitle>Manifesto</S.BannerTitle>

            <S.BannerParagraph lang="pt-br">
            No coração da cidade <br/> Na esquina da Marechal.<br/>Ao lado do ponto de ônibus.<br/>Perto da padaria.<br/>É logo ali…<br/>Na esquina das principais lojas da capital.<br/>Daquele ponto turístico, do correio, da lotérica, do café, da banca que resiste.<br/>Nós somos Esquina Coworking.<br/>Onde as culturas se expressam, onde as diferenças se somam e o mundo se conecta no real e no virtual.<br/>Um lugar que te integra. Que você já faz parte.<br/>Onde nós nos encontramos mais tarde.<br/>Você, pessoa, seja muito bem vinda!<br/>A gente se vê logo ali, na Esquina.
            </S.BannerParagraph>
          </S.TextWrapper>

          <S.BackgroundImage src="https://live.staticflickr.com/65535/52071293658_39ce9aea7c_k.jpg" width="100%" height="100%" loading="lazy" alt='Imagem de fundo do slider'/>
        </S.BannerWrapper>

        {sliderData.map(({ id, title, description, image }) => (
          <S.BannerWrapper key={id}>
            <S.BackgroundImage src={image} width="100%" height="100%" loading="lazy" alt='Imagem de fundo do slider'/>
          </S.BannerWrapper>
        ))}
      </Slider>
    </S.Container>
  );
}

export default MySlider;
