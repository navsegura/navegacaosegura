import "./FrequentlyQuestions.css";
import { H1, Conteudo, Details, Summary } from "./FrequentlyQuestions.styles";

function FrequentlyQuestions() {
  return (
    <>
      <div className="perguntas-frequentes">
        <H1>PERGUNTAS FREQUENTES</H1>
        <Conteudo>
          <Details>
            <Summary>
              Como o Naveguard ajuda a proteger meus filhos na internet?
            </Summary>
            Oferecemos guias de segurança, tutoriais, recursos educativos e
            jogos interativos que ensinam práticas seguras de navegação. Nossa
            plataforma é projetada para capacitar pais e crianças com o
            conhecimento necessário para reconhecer e evitar perigos online.
          </Details>

          <Details>
            <Summary>
              Quais tipos de jogos estão disponíveis na plataforma?
            </Summary>
            Estamos desenvolvendo um jogo 2D com várias ilhas tematizadas. Cada
            ilha oferece jogos interativos que ensinam sobre segurança online de
            maneira divertida, ajudando as crianças a aprender enquanto jogam.
          </Details>

          <Details>
            <Summary>Quais recursos estão disponíveis para os pais?</Summary>
            Na seção dedicada aos pais, você encontrará guias de segurança,
            dicas práticas, tutoriais sobre ferramentas de monitoramento e
            artigos informativos sobre as ameaças digitais. Queremos equipar os
            pais com as ferramentas necessárias para manter um ambiente online
            seguro para seus filhos.
          </Details>

          <Details>
            <Summary>O Naveguard é gratuito?</Summary>
            Sim, oferecemos um plano gratuito que permite acesso a alguns
            recursos e jogos. No entanto, também disponibilizamos planos pagos
            que liberam todas as funcionalidades e jogos, além de recursos
            exclusivos para monitoramento avançado.
          </Details>

          <Details>
            <Summary>O Naveguard é seguro para meu filho usar?</Summary>
            Sim, nossa plataforma foi projetada com a segurança em mente.
            Oferecemos recursos que ajudam a proteger e educar as crianças sobre
            os riscos da internet, promovendo uma navegação segura e divertida.
          </Details>
        </Conteudo>
      </div>
    </>
  );
}

export default FrequentlyQuestions;
