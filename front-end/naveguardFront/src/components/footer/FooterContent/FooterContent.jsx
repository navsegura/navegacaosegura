import "./FooterContent.css";
import { Images } from "../../../assets/images.jsx";

function FooterContent() {
  return (
    <div className="footer-content">
      
      <div className="content-overlay">
        <div className="first-col">
          <ol>
          <li>NAVEGUARD</li>
          <li>Naveguard &copy; 2024</li>
          <li>Todos os direitos reservados</li>
          </ol>
          <div className="social-medias">
            <img src={Images.logoInsta} alt="Instagram" className="logo"/>
            <img src={Images.logoDribbble} alt="Dribbble" className="logo"/>
            <img src={Images.logoTwitter} alt="Twitter" className="logo"/>
            <img src={Images.logoYoutube} alt="YouTube" className="logo"/>
          </div>
        </div>

        <div className="second-col">
          <ol>
            <li>Home</li>
            <li>Sobre</li>
            <li>Apoie o Naveguard</li>
            <li>Fale Conosco</li>
          </ol>
        </div>

        <div className="third-col">
          <ol>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ol>
        </div>

        <div className="fourth-col">
          <ol>
            <li>Receba Novidades</li>
            <input
              className="input-email"
              type="email"
              placeholder="Insira seu e-mail"
            />
            <span className="enviar-seta">➤</span>
          </ol>
        </div>
      </div>
      {/* <img
        src={Images.Footer}
        alt="Imagem do Footer"
        className="Footer-image"
      /> */}
    </div>
  );
}

export default FooterContent;
