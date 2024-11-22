import "./FooterContent.css";
import { Images } from "../../../assets/images.jsx";

function FooterContent() {
  return (
      <div className="footer-content">
      <img src={Images.Footer} alt="Imagem do Footer" className="Footer-image" />
      <div className="content-overlay">
        <div className="first-col">
          <h1>NAVEGUARD</h1>
          <h4>Naveguard &copy; 2024</h4>
          <h4>Todos os direitos reservados</h4>
          <div className="social-medias">
            <img src={Images.logoInsta} alt="Instagram" />
            <img src={Images.logoDribbble} alt="Dribbble" />
            <img src={Images.logoTwitter} alt="Twitter" />
            <img src={Images.logoYoutube} alt="YouTube" />
          </div>
        </div>

        <div className="second-col">
          <h4>Home</h4>
          <h4>Sobre</h4>
          <h4>Apoie o Naveguard</h4>
          <h4>Fale Conosco</h4>
        </div>

        <div className="third-col">
          <h4>Política de Privacidade</h4>
          <h4>Termos de Uso</h4>
        </div>

        <div className="fourth-col">
          <h4>Receba Novidades</h4>
          <input
            className="input-email"
            type="email"
            placeholder="Insira seu e-mail"
          />
          <span className="enviar-seta">➤</span>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
