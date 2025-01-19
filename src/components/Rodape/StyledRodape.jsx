import styled from "styled-components";
import { Link } from "react-scroll";

const StyleRodape = styled.footer`
    margin: auto;
    position: relative;
    bottom: 187px;
    height: 200px;
    width: 100%;
    background-color: #F7A607;

`
const StyleFooter = styled.nav`

    ul {
      float: right;
      margin-right: 100px;
    }

    li {
      position: relative;
      right: 80vh;
      line-height: 40px;
      list-style: none;
    }

    a {
      color: #ffffff;
      font-size: 17px;
      padding: 30px 13px;
      text-transform: uppercase;
      text-decoration: none;
    }
`

export default function StyledRodape (){

    return(
        <StyleRodape>
            <StyleFooter>
                <ul>
                <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="Projetos" smooth={true} duration={500}>Projetos</Link></li>
                <li><Link to="Empresa" smooth={true} duration={500}>Empresa</Link></li>
                <li><Link to="Contato" smooth={true} duration={500}>Contato</Link></li>
                </ul>
            </StyleFooter>

        </StyleRodape>
    )

}