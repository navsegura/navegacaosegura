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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable';
import 'boxicons/css/boxicons.min.css';

const Papyrus = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleValidate = async () => {
    if (!inputValue || inputValue.length !== 8 || loading) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (inputValue === 'HJAJLGTR') {
        localStorage.setItem('papyrus', inputValue);
        setShowModal(true);
      } else {
        localStorage.removeItem('papyrus');
        alert('Código inválido!');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user-profile');
  };

  return (
    <PapyrusContainer>
      <ResolutionNotAvailable />
      <Back>
        <Link to="/payment-page">
        <i className='bx bx-chevrons-left' ></i>
        </Link>
        </Back>
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
            onChange={(e) => setInputValue(e.target.value.toUpperCase())}
          />
        </TicketPromotional>
        <button onClick={handleValidate} disabled={loading}>
          {loading ? 'Validando...' : 'Enviar'}
        </button>
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
