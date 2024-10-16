import styled from 'styled-components'
import fotoSobreNos from '../../img/image.png'
import StyleTraco from '../espacamento/StyledTraco'
import StyleTraco2 from '../espacamento/StyledTraco2'

const StyleMain = styled.main`
  position: relative;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyleFoto = styled.section`
  background-image: url(${fotoSobreNos});
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  left: 95vh;
  bottom: 27vh;
`

const StyleTitle = styled.h1`
  position: relative;
  top: 10vh;
  font-size: 45px;
  right: 48vh;
  padding-bottom: 30px;
`

const StyleParagrafo = styled.p`
  font-size: larger;
  position: relative;
  top: 10vh;
  right: 30vh;
`

export default function StyledMain() {
    return (
      <StyleMain>
          <StyleTraco/>
            <StyleTitle>Sobre nós</StyleTitle>
              <StyleParagrafo>Bem-vindo à M&D Gesso e Decorações, sua parceira dedicada a transformar
                <br /> espaços com elegância e sofisticação. Com uma trajetória sólida no universo do
                <br /> gesso, nos destacamos por oferecer serviços especializados que elevam o padrão
                <br /> estético de ambientes residenciais e comerciais.
              <StyleFoto/>
            </StyleParagrafo>
          <StyleTraco2/>
      </StyleMain>
    )
}