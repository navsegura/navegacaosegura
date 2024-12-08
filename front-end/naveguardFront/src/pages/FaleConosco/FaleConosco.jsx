import "./FaleConosco.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function FaleConosco() {
  return (
    <>
    <Navbar/>
    <div className="container_fale_conosco_principal">
      <div className="conteiner_header_fale">
        <h1>Fale Conosco</h1>
      </div>
        <div className="caixa_dados">
          <label>
            Email
            <input type="text" className="email" />
          </label>

          <label id="mensagem">
            Mensagem
            <textarea name="mensagem_usuario" id="texto"></textarea>
          </label>
          <button>ENVIAR</button>
        </div>
    </div>
    <Footer/>
    </>
  );
}
