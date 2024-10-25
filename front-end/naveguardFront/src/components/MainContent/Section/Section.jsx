<<<<<<< HEAD
import './Section.css'

function Section(){
    return(
        <section className="main_text">
            <h1 className="text">SE AVENTURE NA WEB, NAVEGUE EM SEGURANÇA</h1>
            <div className="buttons">
                <button type="button">ENTRAR</button>
                <button type="button">REGISTRAR</button>
            </div>
        </section>
    )
}

export default Section
=======
import "./Section.css";
import { Images } from "../../../assets/images";

function Section() {
  return (
      <section className="main_text">
        <div className="titulo-e-btn">
          <h1 className="text">SE AVENTURE NA WEB, NAVEGUE EM SEGURANÇA</h1>
          <div className="buttons">
            <button type="button">ENTRAR</button>
            <button type="button">REGISTRAR</button>
          </div>
        </div>
        <div className="papagaio-imagem">
          <img src={Images.papagaio} alt="papagio"/>
        </div>
      </section>
  );
}

export default Section;
>>>>>>> jonas
