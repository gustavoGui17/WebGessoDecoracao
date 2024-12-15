import styled from "styled-components";
import FotoEmpresa from '../../img/Empresa.png'

const StyleEmpresa = styled.section`
position: relative;
bottom: 500px;
background-color: #ffffff;
`

const StyledTituloEmpresa = styled.h1`
  position: relative;
  top: 20px;
  left: 40vh;
  font-size: 50px;
  padding-top: 10vh;
`

const StyledParagrafoEmpresa = styled.p`
  position: absolute;
  left: 74vh;
  top: 10vh;
  font-size: 21px;
`

const StyleTraco = styled.div`
  content: '';
  position: absolute;
  bottom: 60vh;
  left: 40vh;
  height: 10px;
  width: 10%;
  background-color: #F7A607;
`

const StyleFotoEmpresa = styled.section`
  background-image: url(${FotoEmpresa});
  background-repeat: no-repeat;
  position: relative;
  height: 50vh;
  top: 65px;
  left: 40vh;
`

export default function StyledEmpresa (){
    return(
        <StyleEmpresa id="Empresa">
          <StyleTraco/>
            <StyledTituloEmpresa>A empresa</StyledTituloEmpresa>
              <StyledParagrafoEmpresa>Somos uma empresa dedicada a fornecer serviços de alta qualidade no setor de gesso. Com <br />
               uma equipe de mão de obra especializada, estamos preparados para realizar uma ampla gama <br />
               de trabalhos em gesso, atendendo às necessidades exclusivas dos nossos clientes.</StyledParagrafoEmpresa>
              <StyleFotoEmpresa/>
        </StyleEmpresa>
    )
}