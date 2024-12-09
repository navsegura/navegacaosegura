import "./FooterContent.css";
import { Images } from "../../../assets/images.jsx";
import ResolutionNotAvailable from "../../ResolutionNotAvailable/ResolutionNotAvailable.jsx";

function FooterContent() {
  return (
    <>
    <ResolutionNotAvailable/>
    <main className="main-footer">
      <div className="footer-content">
      
        <div className="content-overlay">
          <div className="first-col">
            <ol>
            <li className="titulo-nave">NAVEGUARD</li>
            <li>Naveguard &copy; 2024</li>
            <li>Todos os direitos reservados</li>
            </ol>
            <div className="social-medias">
              <a href="https://www.instagram.com/naveguard/" target="_blank"><img src={Images.logoInsta} alt="Instagram" className="logo"/></a>
              <a href="https://www.linkedin.com/company/naveguard/posts/?feedView=all" target="_blank"><img src={Images.logoDribbble} alt="Dribbble" className="logo"/></a>
              <a href="https://www.linkedin.com/company/naveguard/posts/?feedView=all" target="_blank"><img src={Images.logoTwitter} alt="Twitter" className="logo"/></a>
              <a href="https://www.linkedin.com/company/naveguard/posts/?feedView=all" target="_blank"><img src={Images.logoYoutube} alt="YouTube" className="logo"/></a>
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
      </div>
          <div className="bottom-footer">
            <p className="copyright">Copyright© 2024 NAVEGUARD | PROA PROPROFISSÃO</p>
            </div>
    </main>
    </>
  );
}

export default FooterContent;
