import React from "react";
import { Images } from "../../assets/images";
import "./AnimalsHome.css";

function AnimalsHome() {
  return (
    <>
      <div className="images">
        <div className="animais-cima">
          <img src={Images.Arraia} alt="" className="arraia"/>
          <img src={Images.peixesDireita} alt="" className="peixe-direita"/>
        </div>

        <div className="animais-baixo">
          <img src={Images.peixesEsquerda} alt="" className="peixe-esquerda"/>
          <img src={Images.AguaViva} alt="" className="agua-viva"/>
        </div>
      </div>
    </>
  );
}

export default AnimalsHome;
