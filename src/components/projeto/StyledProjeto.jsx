import styled from "styled-components";
import ProjetoParede from "./ProjetoParede";
import ProjetoTeto from "./ProjetoTeto";

const StyleProjeto = styled.section`
position: relative;
bottom: 500px;
background-color: #EDEDE6;
`

export default function StyledProjeto (){
    return(
        <StyleProjeto>          
                <ProjetoParede/>   
                <ProjetoTeto/>
        </StyleProjeto>
    )
}