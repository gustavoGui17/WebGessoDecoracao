import styled from 'styled-components'
import fotoSobreNos from '../../img/image.png'

const StyleFoto = styled.img`
  background-image: url(${fotoSobreNos});
  height: 72vh;
  width: 100%;
  position: relative;
  left: 80vh;
  bottom: 50vh;
`

const StyleMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyleTitle = styled.h1`
  position: relative;
  top: 25vh;
  font-size: 45px;
  right: 48vh;
  padding-bottom: 30px;
`
const StyleParagrafo = styled.p`
  font-size: larger;
  position: relative;
  top: 29vh;
  right: 30vh;
`

export default function StyledMain() {
    return (
        <StyleMain>
        <StyleTitle>Sobre nós</StyleTitle>
          <StyleParagrafo>Bem-vindo à M&D Gesso e Decorações, sua parceira dedicada
            <br />a transformar espaços com elegância e sofisticação.
            <br />Com uma trajetória sólida no universo do gesso, nos destacamos
            <br />por oferecer serviços especializados que elevam
            <br />o padrão estético de ambientes residenciais e comerciais.
            <StyleFoto/>
          </StyleParagrafo>
        </StyleMain>
    )
}