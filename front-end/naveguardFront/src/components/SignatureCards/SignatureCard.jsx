import "./SignatureCards.css";
import { Images } from "../../assets/images.jsx";

const SignatureCard = () => {
  return (
    <>
      <div className="cards-1">
        <div className="first-card">
          <div className="first-card-title">
            <h1>AVENTURA GRATUITA</h1>
          </div>
          <div className="icones">
              <img src={Images.uncheck} alt="" />
              <img src={Images.uncheck} alt="" />
              <img src={Images.uncheck} alt="" />
              <img src={Images.check} alt="" />
              <img src={Images.check} alt="" />
            </div>
          <div className="first-card-content">
            
            <div className="content">
              <h3>ACESSO LIMITADO AOS JOGOS</h3>
              <h3>ACESSO BÁSICO ÁREA RESPONSÁVEL</h3>
              <h3>ACESSO A TUTORIAIS</h3>
              <h3>ACESSO AOS RESULTADOS</h3>
              <h3>ACESSO AO CHATBOT</h3>
            </div>
            <button className="btn">ACESSE</button>
          </div>
        </div>

        <div className="second-card">
          <div className="second-card-title">
            <h1>AVENTURA INTENSA</h1>
          </div>
          <div className="icones">
            <img src={Images.uncheck} alt="" />
            <img src={Images.uncheck} alt="" />
            <img src={Images.uncheck} alt="" />
            <img src={Images.check} alt="" />
            <img src={Images.check} alt="" />
          </div>

          <div className="second-card-content">
            <h3>ACESSO LIMITADO AOS JOGOS</h3>
            <h3>ACESSO BÁSICO ÁREA RESPONSÁVEL</h3>
            <h3>ACESSO A TUTORIAIS</h3>
            <h3>ACESSO AOS RESULTADOS</h3>
            <h3>ACESSO AO CHATBOT</h3>
            <button className="btn">ASSINAR</button>
          </div>
        </div>

        <div className="third-card">
          <div className="third-card-title">
            <h1>AVENTURA IMERSIVA</h1>
          </div>
          <div className="icones">
            <img src={Images.uncheck} alt="" />
            <img src={Images.uncheck} alt="" />
            <img src={Images.uncheck} alt="" />
            <img src={Images.check} alt="" />
            <img src={Images.check} alt="" />
          </div>
          <div className="third-card-content">
            <h3>ACESSO LIMITADO AOS JOGOS</h3>
            <h3>ACESSO BÁSICO ÁREA RESPONSÁVEL</h3>
            <h3>ACESSO A TUTORIAIS</h3>
            <h3>ACESSO AOS RESULTADOS</h3>
            <h3>ACESSO AO CHATBOT</h3>
            <button className="btn">ASSINAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignatureCard;
