import "./Section.css";
import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images";
import { LoadingComponentInitial } from "../../LoadingComponent/LoadingComponent";
import NuvensContainer from "../../Nuvens/Nuvens";
import { utilScrollRevealLeft, utilScrollRevealRight } from '../../../utils/ScrollReveal';

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
      <NuvensContainer/>
      <LoadingComponentInitial isLoading={isLoading} />
      {/* <a href="#home">
        <div className="arrowUp"><i className='bx bxs-chevron-up'></i></div>
      </a> */}
      <main className="main_text_container" id="home">
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

export {
  Section,
  SectionSobre
};
