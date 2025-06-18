import styled from 'styled-components'
import fotoSobreNos from '../../img/image.png'


const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const TopLine = styled.div`
  width: 200px;
  height: 10px;
  background-color: #F7A607;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 0%;
  }
`;

const BottomLine = styled.div`
  width: 700px;
  height: 6px;
  background-color: #F7A607;
  margin-top: 20px;
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyleFoto = styled.div`
  flex: 1;
  height: 400px;
  background-image: url(${fotoSobreNos});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const StyleTitle = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
  }
`;

const StyleParagrafo = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

export default function StyledMain() {
    return (
      <StyleMain id="Home">
          <ContentWrapper>
            <TextWrapper>
              <TopLine />
              <StyleTitle>Sobre nós</StyleTitle>
              <StyleParagrafo>
                Bem-vindo à M&D Gesso e Decorações, sua parceira dedicada a transformar
                espaços com elegância e sofisticação. Com uma trajetória sólida no universo do
                gesso, nos destacamos por oferecer serviços especializados que elevam o padrão
                estético de ambientes residenciais e comerciais.
              </StyleParagrafo>
              <BottomLine />
            </TextWrapper>
            <StyleFoto />
          </ContentWrapper>
      </StyleMain>
    )
}