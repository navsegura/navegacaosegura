import "./PaymentSection.css";
import { Images } from "../../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PapiroContainer } from "./PaymentSection.styles";

function PaymentSection() {
  const meses = [
    "Mês",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [mesEscolhido, setMesEscolhido] = useState("");
  // const [showPapiro, setShowPapiro] = useState(false);

  // const navigate = useNavigate();

  const escolha = (e) => {
    setMesEscolhido(e.target.value);
  };

  return (
    <section className="payment-section">
      <div className="div-pai">

        <div className="payment-header">
          <div className="payment-back-btn">
          <Link to="/">
            <img src={Images.btnBack} alt="voltar" className="back-img"/></Link>
          </div>
          <div className="payment-title">
            <h1>PAGAMENTO</h1>
          </div>
          <PapiroContainer>
            <Link to="/papyrus">
            <img src={Images.Papiro} alt="Papiro" />
            </Link>
          </PapiroContainer>
        </div>

        <div className="payment-text">
          <h3>Informe os dados do seu cartão de crédito ou débito</h3>
        </div>

        <div className="icons-cards">
          <img src={Images.visaIcon} alt="" />
          <img src={Images.masterCardIcon} alt="" />
          <img src={Images.amCardIcon} alt="" />
          <img src={Images.eloCardIcon} alt="" />
          <img src={Images.hiperCardIcon} alt="" />
        </div>

        <form action="">
          <div className="number-card-input">
            <input type="number" placeholder="Número do cartão" />
          </div>
          <div className="validationCode-cvv">
            <div className="monthCard-input">
              <select id="mes" value={mesEscolhido} onChange={escolha}>
                {meses.map((mes, index) => (
                  <option key={index} value={mes}>
                    {mes}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="number"
              id="year"
              name="year"
              min="2024"
              max="2070"
              step="1"
              placeholder="Ano"
            />
            <input type="number" placeholder="CVV" />
          </div>
          <div className="nameOwner-card">
            <input type="text" placeholder="Nome do titular do cartão" />
          </div>
          <div className="payment-methods-text">
            <h5>Forma de pagamento desejada</h5>
          </div>
          <div className="payment-methods">
            <div className="credit">
              <label>
                <input type="radio" name="payment-method" value="credito" />
                <h5>Crédito</h5>
              </label>
            </div>
            <div className="debit">
            <label>
              <input type="radio" name="payment-method" value="debito" />
              <h5>Débito</h5>
            </label>
          </div>
        </div>

        <div className="plan-option">
          <select className="custom-select">
            <option value="padrao">Mensal - R$ 19,99/mês</option>
            <option value="premium">Anual - R$ 199,99/ano</option>
          </select>
          <span className="custom-text">Trocar</span>
        </div>

        <div className="btn-confirm">
          <button>&gt;&gt;</button>
        </div>
        </form>
      </div>
    </section>
  );
}

export default PaymentSection;
