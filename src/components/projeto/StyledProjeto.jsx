import styled from "styled-components";
import paredeGesso from '../../img/parede-gesso-3d.png'
import forroGesso from '../../img/forro-gesso.png'

const StyleProjeto = styled.section`
  background-color: #EDEDE6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const TopLine = styled.div`
  width: 200px;
  height: 10px;
  background-color: #F7A607;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const BottomLine = styled.div`
  width: 700px;
  height: 6px;
  background-color: #F7A607;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 40px;
`;

const ProjetoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjetoItem = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjetoImage = styled.div`
  flex: 1;
  height: 300px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjetoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjetoTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ProjetoParagrafo = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export default function StyledProjeto() {
    return (
        <StyleProjeto id="Projetos">
          <TopLine/>
            <Title>Projetos</Title>
            <ProjetoWrapper>
                <ProjetoItem>
                    <ProjetoImage style={{ backgroundImage: `url(${paredeGesso})` }} />
                    <ProjetoContent>
                        <ProjetoTitle>Parede de Gesso 3D</ProjetoTitle>
                        <BottomLine/>
                        <ProjetoParagrafo>
                            Especializamo-nos em criar paredes de gesso 3D únicas e sofisticadas. Do design personalizado à aplicação precisa, utilizamos materiais de alta qualidade para transformar paredes em verdadeiras obras de arte.
                        </ProjetoParagrafo>
                    </ProjetoContent>
                </ProjetoItem>

                <ProjetoItem reverse>
                    <ProjetoImage style={{ backgroundImage: `url(${forroGesso})` }} />
                    <ProjetoContent>
                        <ProjetoTitle>Teto Rebaixado</ProjetoTitle>
                        <BottomLine/>
                        <ProjetoParagrafo>
                            Destacamo-nos na arte do rebaixamento de tetos em gesso, trazendo sofisticação e beleza a qualquer espaço. Nossa abordagem personalizada inicia com uma consulta detalhada, seguida pela aplicação precisa de materiais de qualidade premium.
                        </ProjetoParagrafo>
                    </ProjetoContent>
                </ProjetoItem>
            </ProjetoWrapper>
        </StyleProjeto>
    )
}