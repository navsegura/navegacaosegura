import "./Section.css";
import { Images } from "../../../assets/images";
import { Link } from 'react-router-dom';

function Section() {
  return (
      <section className="main_text">
        <div className="titulo-e-btn">
          <h1 className="text">SE AVENTURE NA WEB, NAVEGUE EM SEGURANÇA</h1>
          <div className="buttons">
            <Link to="/login">
            <button>ENTRAR</button>
            </Link>
            <button type="button">REGISTRAR</button>
          </div>
        </div>
        <div className="papagaio-imagem">
          <img src={Images.papagaio} alt="papagio"/>
        </div>
      </section>
  );
}

function SectionSobre(){
  return(
    <section className="todos_sobres">

      <div className="sobre_first">
        <div className="header_sobre">
          <h2>Quem Somos?</h2>
        </div>
        <div className="main_content_sobre">
          <p>Somos desenvolvedores apaixonados por criar tudo com dedicação e carinho. Oferecemos jogos e ferramentas educativas que protegem as crianças e trazem tranquilidade aos responsáveis.</p>
        </div>
      </div>

      <div className="sobre_second">
        <div className="header_sobre">
          <h2>Nossa missão</h2>
        </div>
        <div className="main_content_sobre">
          <p>Nosso objetivo é garantir que as crianças naveguem pela internet de forma segura, enquanto aprendem e se divertem. Tudo isso com a ajuda dos responsáveis, que têm acesso a dicas e ferramentas valiosas.</p>
        </div>
      </div>

      <div className="sobre_third">
        <div className="header_sobre">
          <h3>Por Que Naveguard?</h3>
        </div>
        <div className="main_content_sobre">
          <p>O nome "Naveguard" reflete nosso compromisso de "navegar com proteção". Buscamos tornar cada exploração na internet uma experiência segura e educativa, tanto para as crianças quanto para seus responsáveis.</p>
        </div>
      </div>

      <div className="sobre_fourth">
        <div className="header_sobre">
          <h3>Navegando Além</h3>
        </div>
        <div className="main_content_sobre">
          <p>Continuaremos a nossa missão de expandir a plataforma, trazendo novos jogos e ferramentas que garantam uma navegação segura e divertida para todas as famílias.</p>
        </div>
      </div>

    </section>
  )
}

export { Section, SectionSobre };
