import { Images } from "../../../assets/images";
import './FormLogin.css';
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import GoogleConnection from "../../GoogleConnection/GoogleConnection"; 
import { useContext, useState } from "react";
import { ContextToken } from "../../../utils/context-token";
import * as authService from "../../../services/auth-service";

function FormLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { setContextTokenPayload } = useContext(ContextToken);

    function handleSubmit(event) {
        event?.preventDefault();
        
        authService
          .loginRequest(formData)
          .then((response) => {
            authService.saveAccessToken(response.data.access_token);
            setContextTokenPayload(authService.getAccessTokenPayload());
            navigate("/user-profile");
          })
          .catch(() => {
            console.log("Login ou senha errado!");
          });
      }

      function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
      }


    return (
        <GoogleOAuthProvider clientId="714428010495-iur7ca2rphhg040la184fpms29hqo68p.apps.googleusercontent.com">
            <div className="main_card_login">
                <div className="login_card">
                    <div className="header_login">
                        <Link to='/'>
                        <img src={Images.Seta_Voltar} alt="seta de volta" className="seta_voltar" /></Link>
                        <h1 className="text_login">LOGIN</h1>
                    </div>
                    <div className="main_content_login">
                        <form className="form_login" onSubmit={handleSubmit}>
                            <label>
                                Email
                                <input type="text" name="username" value={formData.username}
                                onChange={handleInputChange}/>
                            </label>
                            <label>
                                Senha
                                <input type="password" name="password" value={formData.password}
                                onChange={handleInputChange}/>
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
