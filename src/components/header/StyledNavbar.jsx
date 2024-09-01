import styled from 'styled-components'
import logo from '../../img/FotoDeFundo.png'


const StyleHeader = styled.header`
    margin: auto;
    height: 98px;
    width: 208vh;
    position: absolute;
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
                  <li><a href="">home</a></li>
                  <li><a href="">Projetos</a></li>
                  <li><a href="">A empresa</a></li>
                  <li><a href="">Contato</a></li>
                </ul>
              </StyleNav>
          </StyleHeader>
        </StyleBanner>  
    )
}
