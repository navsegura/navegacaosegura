import { Images } from '../../assets/images';
import './Cadastro.css';
import { register } from '../../services/user-service.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Cadastro () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: null,
        email: null,
        password: null,
        phone: null,
        birthDay: null,
        bio: null,
        city: null,
        state: null,
        gender: null
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
            console.log(error);
            console.log("Cadastro falhou! Tente novamente");
        });
    }

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    return(
        <div className="main_content_cadastro">
        <form className="cadastro" onSubmit={handleSubmit}>
            <div className='seta'>
            <img src={Images.Seta_Voltar} alt="voltar" />
            <h1>CADASTRO</h1>
            </div>
            
            <label>
                Nome
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
            </label>
            <label>
                Email
                <input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
            </label>
            <label>
                Senha
                <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
            </label>
            <label>
                Telefone
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}/>
            </label>
            <label>
                Nascimento
                <input type="date" name="birthDay" value={formData.birthDay} onChange={handleInputChange}/>
            </label>
            <label>
                Descrição
                <input type="text" name="bio" value={formData.bio} onChange={handleInputChange}/>
            </label>
            <label>
                Cidade
                <input type="text" name="city" value={formData.city} onChange={handleInputChange}/>
            </label>
            <label>
                Estado
                <input type="text" name="state" value={formData.state} onChange={handleInputChange}/>
            </label>
            <label>
                Gênero
                <input type="text" placeholder='FEMALE, MALE OR OTHERS' name="gender" value={formData.gender} onChange={handleInputChange}/>
            </label>
            <button>CADASTRAR</button>

            
        </form>
        </div>
    )
       
}

export default Cadastro;