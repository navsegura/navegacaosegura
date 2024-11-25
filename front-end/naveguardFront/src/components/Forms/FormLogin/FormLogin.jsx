import { Images } from "../../../assets/images";
import './FormLogin.css';
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import GoogleConnection from "../../GoogleConnection/GoogleConnection"; 

function FormLogin() {
    return (
        <GoogleOAuthProvider clientId="714428010495-iur7ca2rphhg040la184fpms29hqo68p.apps.googleusercontent.com">
            <div className="main_card_login">
                <div className="login_card">
                    <div className="header_login">
                        <Link to='/'><img src={Images.Seta_Voltar} alt="seta de volta" className="seta_voltar" /></Link>
                        <h1 className="text_login">LOGIN</h1>
                    </div>
                    <div className="main_content_login">
                        <form className="form_login">
                            <label>
                                Email
                                <input type="text" />
                            </label>
                            <label>
                                Senha
                                <input type="password" />
                            </label>
                            <a href="..." className="esqueci_senha">Esqueci minha senha</a>
                            <button>Entrar</button>
                        </form>
                        <div className="login_google">
                            <p className="ou">ou</p>
                            <GoogleConnection />
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default FormLogin;
