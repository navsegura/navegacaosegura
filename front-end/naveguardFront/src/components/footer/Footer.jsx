import "./Footer.css";
import { Images } from "../../assets/images.jsx";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conteudo-geral">
          <img src={Images.Footer} />

          <div className="conteudo-geral-colunas">
            <div className="main-titulo">
              <h1 className="h1-footer">NAVEGUARD</h1>
            </div>
            <div className="primeira-coluna">
              <p>Naveguard &copy; 2024</p>
              <p>Todos os direitos reservados</p>
            </div>

            <div className="segunda-coluna">
              <p>Home</p>
              <p>Sobre</p>
              <p>Apoie o Naveguard</p>
              <p>Fale conosco</p>
            </div>

            <div className="terceira-coluna">
              <p>Política de privacidade</p>
              <p>Termos de uso</p>
            </div>

            <div className="quarta-coluna">
              <p>Receba Novidades</p>
              <input
                className="input-email"
                type="email"
                placeholder="Insira seu e-mail"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
