import styled from 'styled-components'
import { Link } from 'react-scroll';
import logo from '../../img/FotoDeFundo.png'


const StyleHeader = styled.header`
    margin: auto;
    height: 100px;
    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: #ffffffbe;

`

const StyleBanner = styled.section`
    background-image: url(${logo});
    height: 70vh;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;

`

const StyleNav = styled.nav`
  a.active,
  a:hover {
  background: #F7A607;
  transition: .5s;
}

    ul {
      float: right;
      margin-right: 100px;
    }

    li {
      display: inline-block;
      line-height: 80px;
      margin: 0 15px;
      list-style: none;
    }

    a {
      color: black;
      font-size: 17px;
      padding: 30px 13px;
      text-transform: uppercase;
      text-decoration: none;
    }
`

 export default function StyledNavbar (){
    return (
        <StyleBanner>
          <StyleHeader>
              <StyleNav>
                <ul>
                <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="Projetos" smooth={true} duration={500}>Projetos</Link></li>
                <li><Link to="Empresa" smooth={true} duration={500}>Empresa</Link></li>
                <li><Link to="Contato" smooth={true} duration={500}>Contato</Link></li>
                </ul>
              </StyleNav>
          </StyleHeader>
        </StyleBanner>  
    )
}
