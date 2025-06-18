import styled from "styled-components";
import { Link } from "react-scroll";

const StyleRodape = styled.footer`
    width: 100%;
    height: 200px;
    background-color: #F7A607;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyleFooter = styled.nav`
    ul {
        display: flex;
        gap: 40px; 
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        color: #ffffff;
        font-size: 17px;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #ddd; 
        }
    }
`;

export default function StyledRodape() {
    return (
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
    );
}
