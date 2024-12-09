import { useState } from 'react';
import {
  PapyrusContainer,
  Back,
  PapyrusContent,
  PapyrusTitle,
  TicketPromotional,
  Spinner,
  ModalContainer,
  ModalContent,
  ModalButton,
} from './Papyrus.styles';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable';
import 'boxicons/css/boxicons.min.css';

const Papyrus = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();
    setInputValue(value);

    // Valida quando o código possui exatamente 8 caracteres
    if (value.length === 8 && !loading) {
      validateCode(value);
    }
  };

  const validateCode = async (value) => {
    setLoading(true); // Define estado de carregamento

    try {
      // Simula validação de código
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (value === 'HJAJLGTR') {
        localStorage.setItem('papyrus', value); // Salva no localStorage
        setShowModal(true); // Mostra o modal
      } else {
        localStorage.removeItem('papyrus'); // Remove do localStorage se inválido
      }
    } finally {
      setLoading(false); // Sempre encerra o carregamento
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user-profile'); // Navega após o modal fechar
  };

  return (
    <PapyrusContainer>
      <ResolutionNotAvailable />
      <Back><i className='bx bx-chevrons-left' ></i></Back>
      <PapyrusContent>
        <PapyrusTitle>Que legal que você encontrou um papiro!</PapyrusTitle>
        <p>Aqui é possível liberar todos nossos jogos e funcionalidades de forma <span>GRATUITA</span></p>
        <p>Um presente do NAVEGUARD para você</p>
        <TicketPromotional>
          <label htmlFor="Cupom">Insira seu código: </label>
          <InputMask
            mask="aaaaaaaa"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </TicketPromotional>
        {loading && <Spinner />}
      </PapyrusContent>

      {showModal && (
        <ModalContainer>
          <ModalContent>
            <h2>Parabéns!</h2>
            <p>Agora o papiro está ativo e você tem acesso aos nossos jogos e funcionalidades!</p>
            <ModalButton onClick={handleCloseModal}>Ok</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </PapyrusContainer>
  );
};

export default Papyrus;
