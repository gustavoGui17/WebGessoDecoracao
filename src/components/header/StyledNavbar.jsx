import styled from 'styled-components'
import logo from '../../img/FotoDeFundo.png'

const StyleBanner = styled.section`
    background-image: url(${logo});
    height: 72vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`

const StyleHeader = styled.header`
    max-width: 1280px;
    margin: auto;

`

const StyleFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyleNav = styled.nav`
  height: 80px;
  width: 80%;
  position: absolute;
  top: 0; 


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
            <StyleFlex>
              <StyleNav>
                <ul>
                  <li><a href="">home</a></li>
                  <li><a href="">Projetos</a></li>
                  <li><a href="">A empresa</a></li>
                  <li><a href="">Contato</a></li>
                </ul>
              </StyleNav>
            </StyleFlex>
          </StyleHeader>
        </StyleBanner>  
    )
}
