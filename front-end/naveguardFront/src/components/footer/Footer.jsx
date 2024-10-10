import { Images } from "../../assets/images";
import bgImage from "../../assets/images/footer.svg";
import "./Footer.css";

const Footer = () => {
  // K

  return (
    <>
      <footer>
        <img className="bgImage" src={bgImage} alt="" />
        <h1 className="titulo-footer">NAVEGUARD</h1>
        <div className="conteudo">
          
          <div className="primeira-coluna">
            <p>Naveguard &copy; 2024</p>
            <p>Todos os direitos reservados</p>
            

          </div>
          <div className="segunda-coluna">
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Apoie a NaveGuard</li>
              <li>Fale Conosco</li>
            </ul>
          </div>

          <div className="terceira-coluna">
            <p>Política de Privacidade</p>

            <p>Termos de Uso</p>
          </div>

          <div className="quarta-coluna">
            <label>Receba Novidades:</label>
            <input className="placeholderText" type="email" placeholder="Insira seu Email" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
