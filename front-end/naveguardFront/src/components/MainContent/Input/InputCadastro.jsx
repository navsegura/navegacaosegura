import { Images } from "../../../assets/images";

function InputCadastro() {
  return (
    <>
      <div className="content-input-main">
        <div className="header-input">
          <img src={Images.setainput} alt="seta" />
          <h1>Cadastro</h1>
        </div>

        <form>
          <div className="nome">
            <label>
              Nome
              <input type="text" name="Nome" />
            </label>
          </div>

          <div className="email">
            <label>
              Email
              <input type="email" name="Email" />
            </label>
          </div>

          <div className="senha">
            <label>
              Senha
              <input type="password" name="Senha" />
            </label>
          </div>

          <div className="telefone">
            <label>
              Telefone
              <input type="tel" name="Telefone" />
            </label>
          </div>

          <div className="nascimento">
            <label>
              Nascimento
              <input type="date" name="Nascimento" />
            </label>
          </div>

          <div className="botao">
            <button>
              <img src={Images.inputsubmit} alt="botao" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}



export default InputCadastro ;
