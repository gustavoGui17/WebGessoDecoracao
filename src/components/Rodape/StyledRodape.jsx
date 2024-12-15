import styled from "styled-components";

const StyleRodape = styled.footer`
    margin: auto;
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
                  <li><a href="">home</a></li>
                  <li><a href="">Projetos</a></li>
                  <li><a href="">A empresa</a></li>
                  <li><a href="">Contato</a></li>
                </ul>
            </StyleFooter>

        </StyleRodape>
    )

}