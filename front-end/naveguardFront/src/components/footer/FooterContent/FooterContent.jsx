import "./FooterContent.css";
import { Images } from "../../../assets/images.jsx";
import ResolutionNotAvailable from "../../ResolutionNotAvailable/ResolutionNotAvailable.jsx";

function FooterContent() {
  return (
    <>
    <ResolutionNotAvailable/>
    <div className="footer-content">
      
      <div className="content-overlay">
        <div className="first-col">
          <ol>
          <li className="titulo-nave">NAVEGUARD</li>
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

        <div className="third-col">
          <ol>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ol>
        </div>

        <div className="fourth-col">
          <ol>
            <li>Receba Novidades</li>
            <li>Seja apoiador</li>
            <input
              className="input-email"
              type="email"
              placeholder="Insira seu e-mail"
            />
          </ol>
        </div>
      </div>
      {/* <img
        src={Images.Footer}
        alt="Imagem do Footer"
        className="Footer-image"
      /> */}
    </div>
    </>
  );
}

export default FooterContent;
