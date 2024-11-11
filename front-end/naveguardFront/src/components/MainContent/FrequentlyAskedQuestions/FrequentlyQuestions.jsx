import "./FrequentlyQuestions.css";

function FrequentlyQuestions() {
  return (
    <>
      <div className="perguntas-frequentes">
        <h1>PERGUNTAS FREQUENTES</h1>
        <div className="conteudo">
          <details>
            <summary>
              Como o Naveguard ajuda a proteger meus filhos na internet?
            </summary>
            Oferecemos guias de segurança, tutoriais, recursos educativos e
            jogos interativos que ensinam práticas seguras de navegação. Nossa
            plataforma é projetada para capacitar pais e crianças com o
            conhecimento necessário para reconhecer e evitar perigos online.
          </details>

          <details>
            <summary>
              Quais tipos de jogos estão disponíveis na plataforma?
            </summary>
            Estamos desenvolvendo um jogo 2D com várias ilhas tematizadas. Cada
            ilha oferece jogos interativos que ensinam sobre segurança online de
            maneira divertida, ajudando as crianças a aprender enquanto jogam.
          </details>

          <details>
            <summary>Quais recursos estão disponíveis para os pais?</summary>
            Na seção dedicada aos pais, você encontrará guias de segurança,
            dicas práticas, tutoriais sobre ferramentas de monitoramento e
            artigos informativos sobre as ameaças digitais. Queremos equipar os
            pais com as ferramentas necessárias para manter um ambiente online
            seguro para seus filhos.
          </details>

          <details>
            <summary>O Naveguard é gratuito?</summary>
            Sim, oferecemos um plano gratuito que permite acesso a alguns
            recursos e jogos. No entanto, também disponibilizamos planos pagos
            que liberam todas as funcionalidades e jogos, além de recursos
            exclusivos para monitoramento avançado.
          </details>

          <details>
            <summary>O Naveguard é seguro para meu filho usar?</summary>
            Sim, nossa plataforma foi projetada com a segurança em mente.
            Oferecemos recursos que ajudam a proteger e educar as crianças sobre
            os riscos da internet, promovendo uma navegação segura e divertida.
          </details>
        </div>
      </div>
    </>
  );
}

export default FrequentlyQuestions;
