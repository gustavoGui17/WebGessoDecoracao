import styled from "styled-components";
import forroGesso from '../../img/forro-gesso.png'

const StyleTeto = styled.section`
 background-image: url(${forroGesso});
 background-repeat: no-repeat;
 height: 100vh;
 position: relative;
 left: 100vh;
 bottom: 45vh;
`

const StyleTitulo = styled.h2`
  position: relative;
  bottom: 150vh;
  right: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding-top: 10vh;
`

const StyleTraco = styled.div`
  content: '';
  position: absolute;
  left: 5%;
  bottom: 145vh;
  height: 5px;
  width: 38%;
  background-color: #F7A607;
`

const StyleParagrafo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90vh;
  left: 10vh;
  font-size: 21px;
`

export default function ProjetoTeto (){
    return (
        <div>
            <StyleTeto></StyleTeto>
            <StyleTitulo>Teto rebaixado</StyleTitulo>
            <StyleTraco/>  
            <StyleParagrafo>Destacamo-nos na arte do rebaixamento de tetos em gesso, <br />
             trazendo sofisticação e beleza a qualquer espaço. Nossa <br />
             abordagem personalizada inicia com uma consulta detalhada, <br />
             seguida pela aplicação precisa de materiais de qualidade <br />
             premium.</StyleParagrafo>     
        </div>
    )
}