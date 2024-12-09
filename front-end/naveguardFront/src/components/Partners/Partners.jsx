import "./Partners.css";

function Partners() {
  return (
    <>
      <h1 className="main-title">NOSSO PARCEIRO</h1>
      <div className="partners">
        <div className="content-col">
            <h3 className="content-principal maior">Olhos saudáveis, infância feliz</h3>
            <h2 className="content-principal menor">Cuidando do olhar de quem você ama</h2>
            <a href="https://front-end-demoday.vercel.app/" target="_blank"><button className="saiba-mais-btn">SAIBA MAIS</button></a>
        </div>
      </div>
      <p className="seja-nosso-parceiro">Seja nosso parceiro</p>
    </>
  );
}

export default Partners;
