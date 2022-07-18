import * as S from './styles';

import {
  ESQUINA_CW_FACEBOOK_URL,
  ESQUINA_CW_INSTAGRAM_URL,
  ESQUINA_CW_WHATSAPP_URL,
  MAPS_IFRAME_URL
} from '../../utils/constants';

import Form from './components/Form';

export interface Id{
  id: string;
}

export default function Footer({ id }: Id) {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container id='contact'> 
      <S.Main>
        <S.LeftSide>
          <S.Contact>
            <S.ContactTitle>Contato</S.ContactTitle>

            <S.Wrapper>
              <S.Map>
                <iframe
                  title="Localização da Esquina Coworking"
                  src={MAPS_IFRAME_URL}
                  width={16 * 16}
                  height={16 * 10}
                  frameBorder="0"
                  style={{ border: 0, borderRadius: 8 }}
                  allowFullScreen={false}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </S.Map>
              
              <S.MapDescription>
                <S.Anchor>
                  Av.Marechal Deodoro, 344 - 15º - Centro. Curitiba, PR.
                </S.Anchor>
              </S.MapDescription>
            </S.Wrapper>
          </S.Contact>

          <S.SocialMedia>
            <S.SocialMediaTitle>Redes Sociais</S.SocialMediaTitle>

            <S.Bottom>
              <S.LogoContainer>
                <S.Anchor href={ESQUINA_CW_INSTAGRAM_URL} target="_blank">
                  <S.Logo src={require("../../assets/images/instagram-logo.png")} alt="Logo do Instagram"/>

                  <S.LogoName>Instagram</S.LogoName>
                </S.Anchor>
              </S.LogoContainer>
              
              <S.LogoContainer>
                <S.Anchor href={ESQUINA_CW_FACEBOOK_URL} target="_blank"> 
                  <S.Logo src={require("../../assets/images/facebook-logo.png")}  alt="Logo do Facebook"/>

                  <S.LogoName>Facebook</S.LogoName>
                </S.Anchor>
              </S.LogoContainer>

              <S.LogoContainer>
                <S.Anchor href={ESQUINA_CW_WHATSAPP_URL} target="_blank">
                  <S.Logo src={require("../../assets/images/whatsapp-logo.png")}  alt="Logo do Whatsapp"/>
                  
                  <S.LogoName>Whatsapp</S.LogoName>
                </S.Anchor>
              </S.LogoContainer>
            </S.Bottom>
           
          </S.SocialMedia>
        </S.LeftSide>

        {/* <S.SeparatorLine src="https://live.staticflickr.com/65535/52070415562_6ea594ff75_h.jpg" alt="Linha Separadora"/> */}

        <S.RightSide>
          <S.FormTitle>E-mail</S.FormTitle>
          <Form />
        </S.RightSide>
      </S.Main>

      <S.DataContainer>
        <S.CurrentData>© {currentYear} - Esquina Coworking</S.CurrentData>
      </S.DataContainer>
    </S.Container>
  );
}
