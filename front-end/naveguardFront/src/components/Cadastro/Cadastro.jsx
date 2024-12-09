import { Images } from '../../assets/images';
import './Cadastro.css';
import { register } from '../../services/user-service.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar.jsx';

function Cadastro() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: null,
        email: null,
        password: null,
        phone: null,
        birthDay: null,
        bio: null,
        city: "",
        state: "",
        gender: ""
    });

    function handleSubmit(event) {
        event?.preventDefault();
        const cityLower = formData.city.toLowerCase();
        const stateLower = formData.state.toLowerCase();
        formData.city = cityLower;
        formData.state = stateLower;

        register(formData)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                let errors = [];
                errors = error.response.data.errors || 1;
                if (errors.length > 1) {
                    let strErrors = "";
                    for (let message of errors) {
                        strErrors = strErrors + JSON.stringify(message.message) + "\n";
                    }
                    window.alert(strErrors);
                } else {
                    const strError = JSON.stringify(error.response.data.message);
                    window.alert(strError);
                }
            });
    }

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function nextStep() {
        setStep((prevStep) => prevStep + 1);
    }

    function prevStep() {
        setStep((prevStep) => Math.max(1, prevStep - 1));
    }

    return (
        <>
        <Navbar/>
        <div className="main_content_cadastro">
            <div className='form-container'>
                <div className='seta'>
                    <img src={Images.Seta_Voltar} alt="voltar" onClick={() => navigate("/")}/>
                    <h1>CADASTRO</h1>
                </div>
                <form className="cadastro" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div>
                            <label className='primeira-label'>
                                Nome
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            </label>
                            <label>
                                Email
                                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                            </label>
                            <label>
                                Senha
                                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                            </label>
                            <button type="button" onClick={nextStep}>Próximo</button>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <label>
                                Telefone
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </label>
                            <label>
                                Nascimento
                                <input type="date" name="birthDay" value={formData.birthDay} onChange={handleInputChange} />
                            </label>
                            <label>
                                Descrição
                                <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} />
                            </label>
                            <button type="button" onClick={prevStep}>Anterior</button>
                            <button type="button" onClick={nextStep}>Próximo</button>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <label>
                                Cidade
                                <select name="city" value={formData.city} onChange={handleInputChange}>
                                    <option value="">Selecione uma cidade</option>
                                    <option value="recife">Recife</option>
                                    <option value="olinda">Olinda</option>
                                    <option value="jaboatao">Jaboatão</option>
                                    {/* Adicione mais cidades conforme necessário */}
                                </select>
                            </label>
                            <label>
                                Estado
                                <select name="state" value={formData.state} onChange={handleInputChange}>
                                    <option value="">Selecione um estado</option>
                                    <option value="pernambuco">Pernambuco</option>
                                    {/* Adicione mais estados conforme necessário */}
                                </select>
                            </label>
                            <label>
                                Gênero
                                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                                    <option value="">Selecione um gênero</option>
                                    <option value="female">FEMALE</option>
                                    <option value="male">MALE</option>
                                    <option value="others">OTHERS</option>
                                </select>
                            </label>
                            <button type="button" onClick={prevStep}>Anterior</button>
                            <button type="submit">CADASTRAR</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
        </>
    )
}

export default Cadastro;
