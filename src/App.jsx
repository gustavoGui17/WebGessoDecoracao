import StyledNavbar from "./components/header/StyledNavbar";
import StyledMain from "./components/main/StyledMain";
import StyledProjeto from "./components/projeto/StyledProjeto";
import StyledEmpresa from "./components/Empresa/StyledEmpresa";
import StyledEmail from "./components/Email/StyledEmail";
import StyledRodape from "./components/Rodape/StyledRodape";


export default function App() {

  return (
    <div>
      <StyledNavbar/>
      <StyledMain/>
      <StyledProjeto/>
      <StyledEmpresa/>
      <StyledEmail/>
      <StyledRodape/>
    </div>
  )
}


