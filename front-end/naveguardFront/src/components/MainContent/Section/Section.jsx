import "./Section.css";
import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images";
import { LoadingComponentInitial } from "../../LoadingComponent/LoadingComponent";
import { utilScrollRevealLeft, utilScrollRevealRight } from '../../../utils/ScrollReveal';
import { Link } from "react-router-dom";

function Section() {
  const FirstSection = useRef(null);
  const SecondSection = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000)
  useEffect(() => {
    utilScrollRevealLeft(FirstSection);
    utilScrollRevealRight(SecondSection);
  }, []);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  console.log(isLoggedIn)

  return (
    <section className="main_text" id="home">
      <LoadingComponentInitial isLoading={isLoading} />
      <img src={Images.Nuvem} alt="" className="nuvem1" />
      <main className="main_text_container">
        <img src={Images.Nuvem} alt="" className="nuvem3" />
        <div ref={FirstSection} className="titulo-e-btn">
          <h1 className="text">SE AVENTURE NA WEB, <br /> NAVEGUE EM SEGURANÇA</h1>
          {isLoggedIn ? (
            <div className="buttons">
            <Link to="/user-profile">
              <button className="btn" type="button">EXPLORAR</button>
            </Link>

          </div>
          ) : ( 
            <div className="buttons">
              <Link to="/login">
                <button className="btn" type="button">ENTRAR</button>
              </Link>
              <Link to="/register">
                <button className="btn" type="button">REGISTRAR</button>
              </Link>
            </div>
          )}
        </div>
        <div ref={SecondSection} className="papagaio-imagem">
          <img src={Images.papagaio} alt="" />
        </div>
        <img src={Images.Nuvem} alt="" className="nuvem2" />
      </main>
      <img src={Images.Nuvem} alt="" className="nuvem4" />
    </section>
  );
}

function SectionSobre() {
  return (
    <section className="todos_sobres">
      <div className="sobre_first">
        <div className="header_sobre">
          <h2>Quem Somos?</h2>
        </div>
        <div className="main_content_sobre">
          <p>
            Somos desenvolvedores apaixonados por criar tudo com dedicação e
            carinho. Oferecemos jogos e ferramentas educativas que protegem as
            crianças e trazem tranquilidade aos responsáveis.
          </p>
        </div>
      </div>

      <div className="sobre_second">
        <div className="header_sobre">
          <h2>Nossa missão</h2>
        </div>
        <div className="main_content_sobre">
          <p>
            Nosso objetivo é garantir que as crianças naveguem pela internet de
            forma segura, enquanto aprendem e se divertem. Tudo isso com a ajuda
            dos responsáveis, que têm acesso a dicas e ferramentas valiosas.
          </p>
        </div>
      </div>

      <div className="sobre_third">
        <div className="header_sobre">
          <h3>Por Que Naveguard?</h3>
        </div>
        <div className="main_content_sobre">
          <p>O nome Naveguard reflete nosso compromisso de navegar com proteção. Buscamos tornar cada exploração na internet uma experiência segura e educativa, tanto para as crianças quanto para seus responsáveis.</p>
        </div>
      </div>

      <div className="sobre_fourth">
        <div className="header_sobre">
          <h3>Navegando Além</h3>
        </div>
        <div className="main_content_sobre">
          <p>
            Continuaremos a nossa missão de expandir a plataforma, trazendo
            novos jogos e ferramentas que garantam uma navegação segura e
            divertida para todas as famílias.
          </p>
        </div>
      </div>
    </section>
  );
}

//seção kids
function SectionSuaAventura() {
  return (
    <>
      <div className="nuvens-container">
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem1"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem2"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem3"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem4"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem5"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem6"
        />
        <img
          src={Images.Nuvem}
          alt="nuvem-img"
          width={"30%"}
          className="nuvem7"
        />
      </div>
      <div className="sua-aventura">
        <div className="sua-aventura-titulo">
          <h1>ESCOLHA SUA AVENTURA!</h1>
        </div>
        <div className="aventuras">
          <div className="imagem1">
            <h2>A GRANDE NAVEGAÇÃO</h2>
            <p>Uma aventura épica pelos mares!</p>
          </div>
          <div className="imagem2">
            <h2>DESAFIO DO TESOURO</h2>
            <p>Jogue minigames e colete tesouros.</p>
          </div>
          <div className="imagem3">
            <h2>HISTÓRIAS DO MAR</h2>
            <p>Assista vídeos divertidos e educativos!</p>
          </div>
        </div>
      </div>
    </>
  );
}

function FooterKidsPage() {
  return (
    <footer className="cloud-footer">
      <img src={Images.Cloud_Footer} alt="footer-section-kids" />
    </footer>
  );
}

function SectionGrandeNavegacao() {
  return (
    <>
      <div className="Game-on-section">
        <h2>A Grande Navegação</h2>
        <div className="linha"></div>
        <div className="container-game"></div>
        <div className="btn-jogar">
          <button className="btn-jogo">Jogar ▶</button>
        </div>
        <img src={Images.Game_section_background} alt="" />
      </div>
    </>
  );
}

function SectionDesafiosDoTesouro() {
  return (
    <>
      <div className="desafios-do-tesouro">
        <h2>Desafios do tesouro</h2>
        <div className="linha-divisora2"></div>
        <div className="container-games">
          <div className="jogo1">
            1<button className="btn-jogo1">Jogar ▶</button>
          </div>
          <div className="jogo2">
            2<button className="btn-jogo2">Jogar ▶</button>
          </div>
          <div className="jogo3">
            3<button className="btn-jogo3">Jogar ▶</button>
          </div>
          <div className="jogo4">
            4<button className="btn-jogo4">Jogar ▶</button>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionHistoriasDoMar() {
  return (
    <>
      <div className="historias-do-mar">
        <h2>Histórias do mar</h2>
        <div className="linha3-divisao"></div>
        <div className="numero-historias">
          <div className="video1">1</div>
          <div className="video2">2</div>
          <div className="video3">
            3
            <img src={Images.Cadeado} alt="bloqueado" width={'80%'} className="cadeado-jogo3"/>
          </div>
          <div className="video4">
            4
            <img src={Images.Cadeado} alt="bloqueado" width={'80%'} className="cadeado-jogo4"/>
          </div>
          <div className="video-historia"> ▶</div>
          <button className="video-assistir">Assistir</button>
        </div>
      </div>
    </>
  );
}

export {
  Section,
  SectionSobre,
  SectionSuaAventura,
  FooterKidsPage,
  SectionGrandeNavegacao,
  SectionDesafiosDoTesouro,
  SectionHistoriasDoMar,
};
