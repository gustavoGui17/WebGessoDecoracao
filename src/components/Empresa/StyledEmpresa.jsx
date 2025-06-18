import styled from "styled-components";
import FotoEmpresa from '../../img/Empresa.png'

const StyleEmpresa = styled.section`
  background-color: #ffffff;
  padding: 60px 20px; /* espaçamento interno */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledTituloEmpresa = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const StyledParagrafoEmpresa = styled.p`
  font-size: 21px;
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 0 10px;
  }
`;

const StyleTraco = styled.div`
  height: 10px;
  width: 10%;
  background-color: #F7A607;
  margin: 0 auto 30px auto;

  @media (max-width: 600px) {
    width: 20%;
  }
`;

const StyleFotoEmpresa = styled.div`
  background-image: url(${FotoEmpresa});
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 300px;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

export default function StyledEmpresa (){
    return(
        <StyleEmpresa id="Empresa">
          <StyleTraco/>
            <StyledTituloEmpresa>A empresa</StyledTituloEmpresa>
              <StyledParagrafoEmpresa>Somos uma empresa dedicada a fornecer serviços de alta qualidade no setor de gesso. Com
               uma equipe de mão de obra especializada, estamos preparados para realizar uma ampla gama
               de trabalhos em gesso, atendendo às necessidades exclusivas dos nossos clientes.</StyledParagrafoEmpresa>
              <StyleFotoEmpresa/>
        </StyleEmpresa>
    )
}