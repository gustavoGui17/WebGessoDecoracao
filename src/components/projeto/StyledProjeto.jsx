import styled from "styled-components";
import paredeGesso from '../../img/parede-gesso-3d.png'
import tetoGesso from '../../img/forro-gesso.png'
import ProjetoParede from "./ProjetoParede";

const StyleProjeto = styled.section`
position: relative;
bottom: 500px;
background-color: #EDEDE6;
`

const StyleGesso = styled.section`
  background-image: url(${paredeGesso});
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  top: 180px;
  left: 5%;
`

const StyleForro = styled.section`
 background-image: url(${tetoGesso});
 background-repeat: no-repeat;
 height: 100vh;
 position: relative;
`


export default function StyledProjeto (){
    return(
        <StyleProjeto>          
                <StyleGesso>
                    <ProjetoParede/>   
                </StyleGesso>
                <StyleForro>

                </StyleForro>
        </StyleProjeto>
    )
}