import styled from "styled-components";
import paredeGesso from '../../img/parede-gesso-3d.png'
import forroGesso from '../../img/forro-gesso.png'

const StyleProjeto = styled.section`
position: relative;
bottom: 500px;
background-color: #EDEDE6;
height: 130vh;
`

const StyleFotoParede3D = styled.section`
  background-image: url(${paredeGesso});
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  top: 65px;
  left: 5%;
`

const StyleTraco = styled.div`
  content: '';
  position: absolute;
  bottom: 123vh;
  left: 45%;
  height: 10px;
  width: 10%;
  background-color: #F7A607;
`

const StyleTituloProjeto = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  padding-top: 10vh;
`

const StyleTituloParede3D = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 97vh;
  left: 100vh;
  font-size: 30px;
`

const StyleTraco2 = styled.div`
  content: '';
  position: absolute;
  left: 100vh;
  bottom: 97vh;
  height: 5px;
  width: 40%;
  background-color: #F7A607;
`

const StyleParagrafoParede3D = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 35vh;
  left: 100vh;
  font-size: 21px;
`

//PROJETO FORRO DE GESSO//

const StyleFotoForroGesso = styled.section`
 background-image: url(${forroGesso});
 background-repeat: no-repeat;
 height: 100vh;
 position: relative;
 left: 100vh;
 bottom: 45vh;
`

const StyleTituloForroGesso = styled.h2`
  position: relative;
  bottom: 150vh;
  right: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding-top: 10vh;
`

const StyleTraco3 = styled.div`
  content: '';
  position: absolute;
  left: 5%;
  bottom: 43vh;
  height: 5px;
  width: 38%;
  background-color: #F7A607;
`

const StyleParagrafoForroGesso = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90vh;
  left: 10vh;
  font-size: 21px;
`

export default function StyledProjeto (){
    return(
        <StyleProjeto id="Projetos"> 
            <StyleTraco/>
                <StyleTituloProjeto>Projetos</StyleTituloProjeto>  
            <StyleTraco2/>
                <StyleTituloParede3D>Parede de Gesso 3D</StyleTituloParede3D>
            <StyleParagrafoParede3D>Especializamo-nos em criar paredes de gesso 3D únicas e 
                 <br />sofisticadas. Do design personalizado à aplicação precisa,
                 <br /> utilizamos materiais de alta qualidade para transformar
                 <br /> paredes em verdadeiras obras de arte.
            </StyleParagrafoParede3D>
                <StyleFotoParede3D/> 
            <StyleFotoForroGesso/>
                <StyleTituloForroGesso>Teto rebaixado</StyleTituloForroGesso>
            <StyleTraco3/>  
            <StyleParagrafoForroGesso>Destacamo-nos na arte do rebaixamento de tetos em gesso, <br />
                trazendo sofisticação e beleza a qualquer espaço. Nossa <br />
                abordagem personalizada inicia com uma consulta detalhada, <br />
                seguida pela aplicação precisa de materiais de qualidade <br />
                premium.
            </StyleParagrafoForroGesso>
        </StyleProjeto>
    )
}