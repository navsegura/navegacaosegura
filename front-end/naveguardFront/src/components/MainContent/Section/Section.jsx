import "./Section.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/images";
import { utilScrollRevealLeft, utilScrollRevealRight } from '../../../utils/ScrollReveal'

function Section() {

  const FirstSection = useRef(null)
  const SecondSection = useRef(null)

  useEffect(() => {
    utilScrollRevealLeft(FirstSection);
    utilScrollRevealRight(SecondSection);
  },[])
  return (
      <section className="main_text" id="home">
        <img src={Images.Nuvem} alt="" className="nuvem1" />
        <main className="main_text_container">
        <img src={Images.Nuvem} alt="" className="nuvem3" />
          <div ref={FirstSection} className="titulo-e-btn">
            <h1 className="text">SE AVENTURE NA WEB, <br /> NAVEGUE EM SEGURANÇA</h1>
            <div className="buttons">
              
              <Link to="/login"><button className="btn" type="button">ENTRAR</button></Link>
              <Link to="/register"><button className="btn" type="button">REGISTRAR</button></Link>
            </div>
          </div>
          <div ref={SecondSection} className="papagaio-imagem">
            <img src={Images.papagaio} alt=""/>
          </div>
        <img src={Images.Nuvem} alt="" className="nuvem2" />
        </main>
        <img src={Images.Nuvem} alt="" className="nuvem4" />
      </section>
  );
}

export default Section;
