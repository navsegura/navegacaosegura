import { useState } from 'react';
import {
  PapyrusContainer,
  ImgSiri,
  ImgSiriII,
  ImgSiriIII,
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
import { Images } from '../../assets/images';

const Papyrus = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();
    setInputValue(value);

    if (value.length === 9) {
      validateCode(value);
    }
  };

  const validateCode = (value) => {
    if (loading) return;

    setLoading(true);

    if (value === 'NAVEGUARD') {
      setTimeout(() => {
        localStorage.setItem('papyrus', value);
        setLoading(false);
        setShowModal(true);
      }, 1500);
    } else {
      setTimeout(() => {
        localStorage.removeItem('papyrus');
        setLoading(false);
      }, 1500);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user-profile');
  };

  return (
    <PapyrusContainer>
      <div>
        <ImgSiri src={Images.Siri} alt="Siri" />
        <ImgSiriII src={Images.SiriRight} alt="Siri" />
        <ImgSiriIII src={Images.Siri} alt="Siri" />
      </div>
      <PapyrusContent>
        <PapyrusTitle>Que legal que você encontrou um papiro!</PapyrusTitle>
        <p>Aqui é possível liberar todos nossos jogos e funcionalidades de forma <span>GRATUITA</span></p>
        <p>Um presente do NAVEGUARD para você</p>
        <TicketPromotional>
          <label htmlFor="Cupom">Insira seu código: </label>
          <InputMask
            mask="aaaaaaaaa"
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
