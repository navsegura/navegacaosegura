import { Images } from '../../assets/images';
import './Cadastro.css';


function Cadastro () {

    return(
        <div className="main_content_cadastro">
        <form className="cadastro">
            <div className='seta'>
            <img src={Images.Seta_Voltar} alt="voltar" />
            <h1>CADASTRO</h1>
            </div>
            
            <label>
                Nome
                <input type="text" />
            </label>
            <label>
                Email
                <input type="text" />
            </label>
            <label>
                Senha
                <input type="password" />
            </label>
            <label>
                Telefone
                <input type="tel" />
            </label>
            <label>
                Nascimento
                <input type="date" />
            </label>
            <button>CADASTRAR</button>

            
        </form>
        </div>
    )
       
}

export default Cadastro;