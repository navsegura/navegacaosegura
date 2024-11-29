import Navbar from "../../components/NavBar/Navbar";
// import SideBar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
import { MainContainer, Back, Span, ControlContent, TitleControl, Line } from '../ParentalControl/ParentalControl.styles'
import { PerguntasFrequentes, Conteudo, Details, Sumary } from '../Articles/Articles.styles'
import NuvensContainer from "../../components/Nuvens/Nuvens";

const Articles = () => {
  return (
    <>
    <Navbar/>
    {/* <SideBar/> */}
    <MainContainer>
      <NuvensContainer/>
          <ControlContent>
            <Span>
              <Link to="/user-profile">
                <Back><i className='bx bxs-chevrons-left'></i></Back>
              </Link>
              <TitleControl>Artigos</TitleControl>
              <p></p>
            </Span>
              <Line></Line>
              <PerguntasFrequentes>
        <Conteudo>
          <Details
          >
            <Sumary>
            1 - Como Identificar Conteúdos Inapropriados
            </Sumary>
            Oferecemos guias de segurança, tutoriais, recursos educativos e
            jogos interativos que ensinam práticas seguras de navegação. Nossa
            plataforma é projetada para capacitar pais e crianças com o
            conhecimento necessário para reconhecer e evitar perigos online.
          </Details
          >

          <Details
          >
            <Sumary>
            2 - Como Proteger Informações Pessoais
            </Sumary>
            Estamos desenvolvendo um jogo 2D com várias ilhas tematizadas. Cada
            ilha oferece jogos interativos que ensinam sobre segurança online de
            maneira divertida, ajudando as crianças a aprender enquanto jogam.
          </Details
          >

          <Details
          >
            <Sumary>
              3 - Educação sobre Ciberbullying
              </Sumary>
            Na seção dedicada aos pais, você encontrará guias de segurança,
            dicas práticas, tutoriais sobre ferramentas de monitoramento e
            artigos informativos sobre as ameaças digitais. Queremos equipar os
            pais com as ferramentas necessárias para manter um ambiente online
            seguro para seus filhos.
          </Details
          >

          <Details
          >
            <Sumary>
              4 - Uso Saudável da Internet e Limites de Tempo
              </Sumary>
            Sim, oferecemos um plano gratuito que permite acesso a alguns
            recursos e jogos. No entanto, também disponibilizamos planos pagos
            que liberam todas as funcionalidades e jogos, além de recursos
            exclusivos para monitoramento avançado.
          </Details
          >

          <Details
          >
            <Sumary>
              5 - Educação Financeira e Compras Online

            </Sumary>
            Sim, nossa plataforma foi projetada com a segurança em mente.
            Oferecemos recursos que ajudam a proteger e educar as crianças sobre
            os riscos da internet, promovendo uma navegação segura e divertida.
          </Details>
        </Conteudo>
      </PerguntasFrequentes>
          </ControlContent>
        
        </MainContainer>
    </>
  );
};

export default Articles;
