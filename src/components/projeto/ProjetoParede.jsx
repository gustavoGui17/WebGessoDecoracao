import styled from "styled-components";

const StyleTraco = styled.div`
  content: '';
  position: absolute;
  bottom: 115%;
  left: 45%;
  height: 10px;
  width: 10%;
  background-color: #F7A607;
`

const StyleTitulo = styled.h1`
  position: relative;
  bottom: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  padding-top: 5vh;
  padding-bottom: 10vh;
`


const StyleTitulo01 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 90vh;
  left: 95vh;
  font-size: 30px;
`

const StyleTraco2 = styled.div`
  content: '';
  position: absolute;
  top: 10%;
  left: 45%;
  height: 5px;
  width: 40%;
  background-color: #F7A607;
`

const StyleParagra01 = styled.p`
  display: flex;
  align-items: center;
  font-size: 21px;
  justify-content: center;
  position: absolute;
  bottom: 75vh;
  left: 95vh;
`

export default function ProjetoParede (){
    return(
        <div>
            <StyleTraco/>
             <StyleTitulo>Projetos</StyleTitulo>  
            <StyleTraco2/>
             <StyleTitulo01>Parede de Gesso 3D</StyleTitulo01>
                <StyleParagra01>Especializamo-nos em criar paredes de gesso 3D únicas e 
                 <br />sofisticadas. Do design personalizado à aplicação precisa,
                 <br /> utilizamos materiais de alta qualidade para transformar
                 <br /> paredes em verdadeiras obras de arte.
                </StyleParagra01>
        </div>
    )
}