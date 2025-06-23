import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #F7A607;
  color: #fff;
  padding: 1px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 250px;

  h3 {
    color: #000000;
    margin-bottom: 15px;
  }

  p, a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }

  a:hover {
    color: #c2bcbc;
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F7A607;
  margin: 10px 0;
`;

const CopyRight = styled.p`
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

export default function StyledFooter() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre Nós</h3>
          <p>M&D Gesso e Decorações - Transformando ambientes com sofisticação e qualidade.</p>
        </FooterSection>
        <FooterSection>
          <h3>Contato</h3>
          <p>Email: contato@mdgesso.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </FooterSection>
        <FooterSection>
          <h3>Links Úteis</h3>
          <a href="#Home">Home</a><br />
          <a href="#Empresa">Empresa</a><br />
          <a href="#Projetos">Projetos</a><br />
          <a href="#Contato">Contato</a>
        </FooterSection>
      </FooterContent>
      <BottomLine />
      <CopyRight>© 2025 M&D Gesso e Decorações. Todos os direitos reservados.</CopyRight>
    </FooterContainer>
  );
}
